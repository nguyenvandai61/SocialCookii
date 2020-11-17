const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Friend = new Schema({
    isFriend: {
        type: Boolean, 
    },
    senderUserId:{
        type: Schema.Types.ObjectId,
    },
    receiveUserId:{
        type: Schema.Types.ObjectId,
    },
    isPending: {
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

module.exports = mongoose.model('Friend', Friend)