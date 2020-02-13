const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({ path: 'variables.env' });

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URLP, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });

mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
  console.log('el servidor esta funcionando');
});
