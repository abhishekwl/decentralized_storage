const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    author_id: String,
    author_name: String,
    author_image: String,
    description: String,
    name: String,
    hash: String,
    type: String,
    size: Number,
    likes: [String]
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);