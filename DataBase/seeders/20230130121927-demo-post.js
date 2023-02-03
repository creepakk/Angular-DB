'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post', [{
      title: 'Title demo',
      content: 'Content demo',
      user_id: 1000
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post', null, {});
  }
};
