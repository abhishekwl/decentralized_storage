const User = require('../models/user.model');
const { respond } = require('../util');

exports.createUser = (request, response) => {
    const newUser = new User(request.body);
    newUser.save((err, data) => respond(err, data, request, response));
};

exports.getAllUser = (request, response) => User.find({}, (err, data) => respond(err, data, request, response));

exports.getUser = (request, response) => User.findById(request.params._id, (err, data) => respond(err, data, request, response));

exports.authenticate = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
    User.find({ email: email, password: password }, (err, data) => respond(err, data, request, response));
};

exports.updateUser = (request, response) => {
    const updateBody = request.body;
    User.findByIdAndUpdate(request.params._id, { $set: updateBody }, { new: true }, (err, data) => respond(err, data, request, response));
};

exports.deleteUser = (request, response) => User.findByIdAndRemove(request.params._id, (err, data) => respond(err, data, request, response));
