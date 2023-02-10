const Post = require('../models/post')

class PostService {

    createPost(data) {
        const post = Post.create()
        return post
    }

    getPost(id) {
        const post = Post.findByPk(id)
        return post
    }

    updatePost(id, data) {
        const post = Post.update(data, {
            where: { id: id },
            returning: true
        })
        return post[1]
    }

    deletePost(id) {
        Post.destroy({
            where: { id: id }
        })
    }

    getPostsByUser(id) {
        const posts = Post.findAll({ where: { user_id: id } })
        return posts
    }

    getPosts() {
        const posts = Post.findAll()
        return posts
    }
}

module.exports = new PostService()