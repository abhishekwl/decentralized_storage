const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: String,
    type: String,
    hash: String,
    size: Number,
    owner: String
}, { timestamps: true });

module.exports = mongoose.model('file', fileSchema);
