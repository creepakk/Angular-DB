const Router = require('express')
const router = new Router()

const UserController = require('../controllers/user.controller')

router.post('/user', UserController.createUser)
router.get('/user', UserController.getAllUsers)
router.get('/user/:id', UserController.getOneUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router