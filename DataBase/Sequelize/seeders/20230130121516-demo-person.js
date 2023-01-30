'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('person', [{
      id: 1000,
      name: 'John',
      surname: 'Doe',
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('person', null, {});
  }
};
