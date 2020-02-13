const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/**
 * Routing
 */
module.exports = function() {
  router.post('/movies', movieController.newMovie);
  router.get('/movies/:idMovie', movieController.obtainMovie);
  router.get('/movies', movieController.obtainMovies);
  router.put('/movies/:idMovie', movieController.updateMovie);
  router.delete('/movies/:idMovie', movieController.deleteMovie);

  return router;
};
