const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres_db', 'admin', 'admin', {

    // user: "admin",
    // password: "admin",
    // host: "127.0.0.1",
    // port: 5432,
    // database: "postgres_db"

    // username: 'admin',
    // password: 'admin',
    host: 'localhost',
    // port: 5432,
    dialect: 'postgres',
})

class User extends Model { }
class Post extends Model { }

User.init({
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING }
}, { sequelize, modelName: 'person', timestamps: false, tableName: 'person' })

Post.init({
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    user_id: { type: Sequelize.INTEGER }
}, { sequelize, modelName: 'post', timestamps: false, tableName: 'post' })

module.exports = { User, Post }