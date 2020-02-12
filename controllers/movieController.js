const Movie = require('../models/Movie');



exports.newMovie = async (req,res,next) => {
    console.log(req.body);
    const movie = new Movie(req.body);
    
    try{
        
        await movie.save();
        
        res.json({mensaje:'Add a new movie'});

    }catch(error){
        //si hay error, console log y next
        console.log(error);
        //res.json({mensaje:'Error!'}); //no imprimo esto en pantalla sino que devuelvo el error
        //asi da 200
        res.send(error);
        //Para que la app no se detenga utilizo NEXT
        next();
    }
}

// //MUESTRA TODOS LOS CLIENTES
// exports.mostrarClientes = async (req,res,next) => {
//     try{
//         //const clientes = await Clientes.find({ nombre:'Matias'});
//         const clientes = await Clientes.find({});
//         res.json(clientes);
//     }catch(error){
//         console.log(error);
//         next();

//     }
// }

// //MUESTRA UN CLIENTE FILTRADO POR ID
// exports.mostrarCliente = async (req,res,next) => {
//     try{
//         //La request
//         //console.log(req);
//         //en params te trae losparametros que definimos
//         console.log(req.params);
//         const {idCliente} = req.params;
//         /*if (!mongoose.Types.ObjectId.isValid(idCliente))
//         {
//             res.json({ mensaje: 'Id Invalido'});
//             next();
//         } //return Error({ status: 422 })
//         /*if (! idCliente.match(/^[0-9a-fA-F]{24}$/)) {

//             res.json({ mensaje: 'Id Invalido'}); 
//             next();
//           }
//           */
//        let cliente = await  Clientes.findById(req.params.idCliente);
//        console.log(cliente);
//        if(!cliente){
//            res.json({mensaje:'No Existe el cliente'});
//            console.log('aca');
//            return next()
           
//         }
//         res.json(cliente);

        
//     }catch(error){

//         console.log(error);
//         res.json({mensaje: 'error!'})
//         next();
//     }
// }

// //ACTUALIZAR UN CLIENTE

// exports.actualizarCliente = async (req,res,next) => {
//     try{
//         let cliente = await Clientes.findOneAndUpdate({_id: req.params.idCliente},
//             req.body, 
//             {new:true}
//         );
//         if(!cliente){
//             res.json({mensaje:'El cliente no existe'})
//         }else{
//             res.json(cliente);
//         }
        
//     }catch(error){
//         res.json({mensaje:'Se produjo un error'});
//         console.log(error);
        
//         next();

//     }
// }

// //eliminar cliente

// exports.eliminarCliente = async (req,res,next) => {
//     try{
//         await Clientes.findOneAndDelete({_id : req.params.idCliente})
//         res.json({mensaje:'el cliente fue eliminado'});
//     }catch(error){
//         console.log(error);
//         next();
//     }
// }