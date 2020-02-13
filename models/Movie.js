const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create and export Schema of a Movie
 */
const movieSchema = new Schema({
    title: {
        type : String,
        trim : true,
        required: true,
        unique: true
    },
    premiere: {
        type : Date,
        required: true
    },
    director:{
        type : String,
        trim : true,
        required: true
    },
    actors:{
        type : [ String ],
        required: true
    },
    viewers:{
        type: Number,
        default: 0
        
    }

})


module.exports = mongoose.model('Movie',movieSchema);