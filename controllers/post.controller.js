const Post = require('../models/post.model');
const { respond } = require('../util');

exports.createPost = (request, response) => {
    const post = new Post(request.body);
    post.save((err, data) => respond(err, data, request, response));
};

exports.getAllPublicPosts = (request, response) => Post.find({ type: 'POST' }, (err, data) => respond(err, data, request, response));

exports.getAllPublicVideos = (request, response) => Post.find({ type: 'VIDEO' }, (err, data) => respond(err, data, request, response));

exports.getAllPublicImages = (request, response) => Post.find({ type: 'IMAGE' }, (err, data) => respond(err, data, request, response));

exports.getPostsByAuthor = (request, response) => Post.find({ author_id: request.params._id }, (err, data) => respond(err, data, request, response));

exports.getPost = (request, response) => Post.findById(request.params._id, (err, data) => respond(err, data, request, response));

exports.updatePost = (request, response) => Post.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true }, (err, data) => respond(err, data, request, response));

exports.deletePost = (request, response) => Post.findByIdAndRemove(request.params._id, (err, data) => respond(err, data, request, response));
