const Post = require('../models/post')

const PostService = require('../services/post.service')

class PostController {
    async createPost(req, res) {
        const { title, content } = req.body
        const data = {
            title,
            content,
            user_id: req.params.id
        }
        res.json(await Post.create(data))
    }

    async getPost(req, res) {
        const id = req.params.id
        res.json(await PostService.getPost(id))
    }

    async updatePost(req, res) {
        const { title, content } = req.body
        const id = req.params.id
        res.json(await PostService.updatePost(id, { title, content }))
    }

    async deletePost(req, res) {
        const id = req.params.id
        res.json(await PostService.deletePost(id))
    }

    async getPostsByUser(req, res) {
        const id = req.params.id
        res.json(await PostService.getPostsByUser(id))
    }

    async getPosts(req, res) {
        res.json(await PostService.getPosts())
    }
}

module.exports = new PostController() 