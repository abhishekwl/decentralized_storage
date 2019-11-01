const FileController = require('../controllers/file.controller');

module.exports = app => {
    app.post('/files', FileController.upload);
};