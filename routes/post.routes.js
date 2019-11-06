const PostController = require('../controllers/post.controller');

module.exports = app => {
    app.post('/posts', PostController.createPost);
    app.get('/posts/public', PostController.getAllPublicPosts);
    app.get('/posts/videos', PostController.getAllPublicVideos);
    app.get('/posts/images', PostController.getAllPublicImages);
    app.get('/posts/author/:_id', PostController.getPostsByAuthor);
    app.get('/posts/:_id', PostController.getPost);
    app.put('/posts/:_id', PostController.updatePost);
    app.delete('/posts/:_id', PostController.deletePost);
};
