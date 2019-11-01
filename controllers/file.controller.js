const FileModel = require('../models/file.model');
const { respond } = require('../util');

exports.uploadMetadata = (request, response) => {
    const newFile = new FileModel(request.body);
    newFile.save((err, data) => respond(err, data, request, response));
};

exports.downloadAllFilesMetadata = (request, response) => FileModel.find({}, (err, data) => respond(err, data, request, response));

exports.downloadUserFilesMetadata = (request, response) => FileModel.find({ owner: request.params._id }, (err, data) => respond(err, data, request, response));

exports.fileMetaData = (request, response) => FileModel.find({ hash: request.params.hash }, (err, data) => respond(err, data, request, response));

exports.deleteFileMetaData = (request, response) => FileModel.find({ ownder: request.params.hash }, (err, data) => respond(err, data, request, response));
