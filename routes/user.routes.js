const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post('/users', UserController.createUser);
    app.get('/users', UserController.getAllUser);
    app.get('/users/:_id', UserController.getUser);
    app.post('/users/auth', UserController.authenticate);
    app.put('/users/:_id', UserController.updateUser);
    app.delete('/users/:_id', UserController.deleteUser);
};
