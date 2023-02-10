const User = require('../models/user')
const Post = require('../models/post')

class UserService {

    createUser(data) {
        const user = User.create(data)
        return { user }
    }

    getAllUsers() {
        const users = User.findAll()
        return users
    }

    getUser(id) {
        const user = User.findByPk(id)
        return user
    }

    updateUser(id, data) {
        const user = User.update(data, {
            where: { id: id },
            returning: true
        })
        return user
    }

    deleteUser(id) {
        Post.destroy({
            where: { user_id: id }
        })
        User.destroy({
            where: { id: id }
        })
    }

}

module.exports = new UserService()