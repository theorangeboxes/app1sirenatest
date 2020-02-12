const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type : String,
        trim : true,
        unique: true
    },
    premier: {
        type : Date
    },
    director:{
        type : String,
        trim : true
    },
    actors:{
        type : [ String ]
    },
    viwers:{
        type: Number
    }

})


module.exports = mongoose.model('Movie',movieSchema);