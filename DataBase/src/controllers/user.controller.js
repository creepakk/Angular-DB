const UserService = require('../services/user.service')


class UserController {

    async createUser(req, res) {
        const { name, surname } = req.body
        res.json(await UserService.createUser({ name, surname }))
    }

    async getAllUsers(req, res) {
        res.json(await UserService.getAllUsers())
    }

    async getOneUser(req, res) {
        const id = req.params.id
        res.json(await UserService.getUser(id))
    }

    async updateUser(req, res) {
        const { name, surname } = req.body
        const id = req.params.id
        res.json(await UserService.updateUser(id, { name, surname }))
    }

    async deleteUser(req, res) {
        const id = req.params.id
        res.json(await UserService.deleteUser(id))
    }
}

module.exports = new UserController()