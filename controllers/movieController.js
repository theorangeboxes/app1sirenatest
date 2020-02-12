const Movie = require('../models/Movie');

exports.newMovie = async (req, res, next) => {
  const movie = new Movie(req.body);

  try {
    await movie.save();

    res.json({ mensaje: 'Nueva pelicula guardada' });
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      res.json({ mensaje: 'Pelicula ya registrada!' });
    } else {
      res.send(error);
    }
    console.log(error);
    next();
  }
};

exports.obtainMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    console.log(error);
    res.json({ mensaje: 'Se produjo un error!' });
    next();
  }
};

exports.obtainMovie = async (req, res, next) => {
  try {
    const { idMovie } = req.params;

    let movie = await Movie.findById(idMovie);

    if (!movie) {
      res.json({ mensaje: 'La pelicula no existe' });
      return next();
    }
    res.json(movie);
  } catch (error) {
    console.log(error);

    res.json({ mensaje: 'Se produjo un error!' });
    next();
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    let movie = await Movie.findOneAndUpdate(
      { _id: req.params.idMovie },
      req.body,
      { new: true }
    );
    if (!movie) {
      res.json({ mensaje: 'La pelicula no existe' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.json({ mensaje: 'Se produjo un error' });
    console.log(error);
    next();
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    await Movie.findOneAndDelete({ _id: req.params.idMovie });
    res.json({ mensaje: 'La pelicula fue eliminada' });
  } catch (error) {
    res.json({ mensaje: 'Se produjo un error' });
    console.log(error);
    next();
  }
};
