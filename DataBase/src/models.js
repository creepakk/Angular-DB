const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres_db', 'admin', 'admin', {
    host: 'localhost',
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