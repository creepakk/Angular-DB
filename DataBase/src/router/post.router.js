const Router = require('express')
const router = new Router()

const PostController = require('../controllers/post.controller')

router.post('/post/:id', PostController.createPost)
router.get('/post/:id', PostController.getPost)
router.put('/post/:id', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)

router.get('/posts/:id', PostController.getPostsByUser)
router.get('/posts', PostController.getPosts)


module.exports = router