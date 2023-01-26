const db = require('../db')

class PostController {
    async createPost(req, res) {
        const userId = req.params.id
        const { title, content } = req.body
        const newPost = await db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, userId])
        res.json(newPost.rows[0])
    }
    async getPost(req, res) {
        const id = req.params.id
        const post = await db.query('SELECT * FROM post WHERE id = $1', [id])
        res.json(post.rows[0])
    }
    async updatePost(req, res) {
        const id = req.params.id
        const { title, content } = req.body
        const post = await db.query('UPDATE post set title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id])
        res.json(post.rows[0])
    }
    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query('DELETE FROM post WHERE id = $1', [id])
        res.json(post.rows[0])
    }

    async getPostsByUser(req, res) {
        const id = req.params.id
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
        res.json(posts.rows)
    }
    async getPosts(req, res) {
        const posts = await db.query('SELECT * FROM post')
        res.json(posts.rows)
    }
}

module.exports = new PostController() 