const db = require('../db')

class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    }
    async getAllUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const id = req.params.id
        const { name, surname } = req.body
        const user = await db.query('UPDATE person set name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        await db.query('DELETE FROM post WHERE user_id = $1', [id])
        await db.query(`DELETE FROM person WHERE id = $1`, [id])
        res.json()
    }
}

module.exports = new UserController()