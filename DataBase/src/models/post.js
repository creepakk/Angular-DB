'use strict';
const { Sequelize, Model } = require('sequelize');
const sequelize = require('../../bootstrap/sequelize')

class Post extends Model { }

Post.init({
  title: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING },
  user_id: { type: Sequelize.INTEGER }
}, { sequelize, modelName: 'post', timestamps: false, tableName: 'post' })

module.exports = Post