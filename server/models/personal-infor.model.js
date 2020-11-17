const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalInfor = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        maxlength: 255,
    },
    firstName: {
        type: String,
        maxlength: 255,
    },
    lastName:{
        type: String,
        maxlength: 255,
    },
    gender: {
        type: Boolean, 
    },
    dayOfBirth: {
        type: Date,
        default: Date.now,
    },
    phone: {
        type: String, 
        maxlength: 255,
    },
    email: {
        type: String,
        maxlength: 255,
    },
    avata: {
        type: String,
        maxlength: 255,
    },
})

module.exports = mongoose.model('PersonalInfor', PersonalInfor)