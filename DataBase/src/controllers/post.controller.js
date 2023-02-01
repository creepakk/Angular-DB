const { Post } = require('../models')

class PostController {
    async createPost(req, res) {
        const { title, content } = req.body
        const post = await Post.create({ title, content, user_id: req.params.id })
        res.json(post)
    }

    async getPost(req, res) {
        const post = await Post.findByPk(req.params.id)
        res.send(post)
    }

    async updatePost(req, res) {
        const { title, content } = req.body
        const post = await Post.update({ title, content }, {
            where: { id: req.params.id },
            returning: true
        })
        res.json(post[1][0])
    }

    async deletePost(req, res) {
        await Post.destroy({
            where: { id: req.params.id }
        })
        res.json()
    }

    async getPostsByUser(req, res) {
        const posts = await Post.findAll({ where: { user_id: req.params.id } })
        res.json(posts)
    }

    async getPosts(req, res) {
        const posts = await Post.findAll()
        res.json(posts)
    }
}

module.exports = new PostController() 