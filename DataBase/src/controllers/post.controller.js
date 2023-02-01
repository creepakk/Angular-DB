const { Post } = require('../models')
class PostController {
    //     async createPost(req, res) {
    //         const userId = req.params.id
    //         const { title, content } = req.body
    //         const newPost = await db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, userId])
    //         res.json(newPost.rows[0])
    //     }

    async createPost(req, res) {
        const { title, content } = req.body
        const post = await Post.create({ title, content, user_id: req.params.id })
        res.json(post)
    }
    //     async getPost(req, res) {
    //         const id = req.params.id
    //         const post = await db.query('SELECT * FROM post WHERE id = $1', [id])
    //         res.json(post.rows[0])
    //     }

    async getPost(req, res) {
        const post = await Post.findByPk(req.params.id)
        res.send(post)
    }
    //     async updatePost(req, res) {
    //         const id = req.params.id
    //         const { title, content } = req.body
    //         const post = await db.query('UPDATE post set title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id])
    //         res.json(post.rows[0])
    //     }

    async updatePost(req, res) {
        const { title, content } = req.body
        const post = await Post.update({ title, content }, {
            where: { id: req.params.id },
            returning: true
        })
        res.json(post[1][0])
    }
    //     async deletePost(req, res) {
    //         const id = req.params.id
    //         const post = await db.query('DELETE FROM post WHERE id = $1', [id])
    //         res.json(post.rows[0])
    //     }

    async deletePost(req, res) {
        await Post.destroy({
            where: { id: req.params.id }
        })
        res.json()
    }

    //     async getPostsByUser(req, res) {
    //         const id = req.params.id
    //         const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
    //         res.json(posts.rows)
    //     }

    async getPostsByUser(req, res) {
        const posts = await Post.findAll({ where: { user_id: req.params.id } })
        res.json(posts)
    }
    //     async getPosts(req, res) {
    //         const posts = await db.query('SELECT * FROM post')
    //         res.json(posts.rows)
    //     }

    async getPosts(req, res) {
        const posts = await Post.findAll()
        res.json(posts)
    }
}

module.exports = new PostController() 