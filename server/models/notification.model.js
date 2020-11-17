const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notification = new Schema({
    url: {
        type: String,
        maxlength: 255,
    },
    content: {
        type: String,
    },
    senderUserId:{
        type: Schema.Types.ObjectId,
    },
    receiveUserId:{
        type: Schema.Types.ObjectId,
    },
    isSeen: {
        type: Boolean, 
    },
    deleteAt: {
        type: Date,
        default: null,
    },
    createAt: {
        type: Date,
    },
})

module.exports = mongoose.model('Notification', notification)