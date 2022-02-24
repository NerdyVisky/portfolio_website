const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    imgURL : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    docsLink : {
        type: Array
    },
    hostLink : {
        type : String,
        default : ''
    }
});

module.exports = mongoose.model('Projects', projectSchema);