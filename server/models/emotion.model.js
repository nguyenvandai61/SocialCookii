const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Emotion = new Schema({
    emotionName: {
        type: String,
    },
    imageFilename: {
        type: String,
    },
})

module.exports = mongoose.model('Emotion', Emotion)