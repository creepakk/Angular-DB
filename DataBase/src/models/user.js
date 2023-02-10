'use strict';
const { Sequelize, Model } = require('sequelize');
const sequelize = require('../../bootstrap/sequelize')

class User extends Model { }

User.init({
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING }
}, { sequelize, modelName: 'users', timestamps: false, tableName: 'users' })


module.exports = User