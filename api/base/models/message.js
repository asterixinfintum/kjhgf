const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
    number: {
        type: String,
        required: true
    }, 
    textvalue: {
        type: String,
        default: ''
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;