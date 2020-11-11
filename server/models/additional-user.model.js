const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdditionalUser = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        maxlength: 255,
    },
    creatAt: {
        type: Date,
    },
    updateAt: {
        type: Date,
    },
    isActive: {
        type: Boolean, 
    },
    isReported: {
        type: Boolean, 
    },
    isBlocked: {
        type: Boolean, 
    },
    verificationCode: {
        type: String,
        maxlength: 255,
    },
})

module.exports = mongoose.model('AdditionalUser', AdditionalUser)