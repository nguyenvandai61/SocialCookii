var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
    name : {
        type: String
    },
    description: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    } 

});


module.exports = mongoose.model('Image', imageSchema)
