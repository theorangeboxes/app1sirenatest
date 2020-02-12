const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

module.exports = function() {
  

    router.post('/movie',movieController.newMovie);


//     router.get('/', (req, res ) => {
//     res.send('inicio');
//   });
//   router.get('/nosotros', (req, res) => {
//     res.send('nosotros');
//   });
  return router;
};
