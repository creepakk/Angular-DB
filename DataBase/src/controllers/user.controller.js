const { User, Post } = require('../models')

class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body
        const user = await User.create({ name, surname })
        res.json(user)
    }

    async getAllUsers(req, res) {
        const users = await User.findAll()
        res.json(users)
    }

    async getOneUser(req, res) {
        const user = await User.findByPk(req.params.id)
        res.json(user)
    }

    async updateUser(req, res) {
        const { name, surname } = req.body
        const user = await User.update({ name, surname }, {
            where: { id: req.params.id },
            returning: true
        })
        res.json(user[1][0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        await Post.destroy({
            where: { user_id: id }
        })
        await User.destroy({
            where: { id: id }
        })
        res.json()
    }
}

module.exports = new UserController()