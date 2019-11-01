const FileController = require('../controllers/file.controller');

module.exports = app => {
    app.post('/files', FileController.uploadMetadata);
    app.get('/files', FileController.downloadAllFilesMetadata);
    app.get('/files/owner/:_id', FileController.downloadUserFilesMetadata);
    app.get('/files/:hash', FileController.fileMetaData);
};