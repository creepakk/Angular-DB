const Router = require('express')
const router = new Router()

const PostController = require('../controllers/post.controller')

router.post('/post/:id', PostController.createPost)
router.get('/post/:id', PostController.getPostsByUser)

module.exports = router