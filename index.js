const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({path: 'variables.env'});

// //por ultimo se importa CORS, permite que un cliente se conecte.
// const cors = require('cors');

//conectar mongo
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/restapi', {useNewUrlParser:true});

mongoose
  //.connect('mongodb://localhost/sirenaAPP1DB', {
    .connect(process.env.DB_URLP, {
  //.connect('mongodb+srv://root2:play123@cluster0-kfrsq.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });
//Se adiciona esta config sino sale DeprecationWarning
mongoose.set('useCreateIndex', true);
//sino me sale deprecado el findOneAndModify
mongoose.set('useFindAndModify', false);

//crea el server
const app = express();

//carpeta PUBLICA
// app.use(express.static('uploads'));

//habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //const whitelist = ['http://localhost:3000'];
// const whitelist = [process.env.FE_URL];
// //const whitelist = ['https://naughty-goldberg-b69ecc.netlify.com'];
// const corsOption = {
//   origin: (origin, callback) => {
//     //revisar si peticion llega de servidor de lista blanca
//     console.log('ORIGEN',origin)
//     const existe = whitelist.some(dominio => dominio === origin);
//     if (existe) {
//       //console.log('ok dejo pasar')
//       callback(null, true);
//     } else {
//       //console.log('no existe');;
//       callback(new Error('No permitido por CORS'));
//     }
//   }
// };

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

//habilitar cors (solo la primera linea anda local)
//app.use(cors());





//rutas de la app
app.use('/', routes()); 

// //carpeta PUBLICA aca no andaba va arriba!
// app.use(express.static('uploads'));

//puerto
//app.listen(5000);
//
//HEROKU asigna estas variables
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port,host,() =>{
  console.log('el servidor esta funcionando');
})
