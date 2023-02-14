'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* *
     * Add seed commands here.
     *
     * Example: */
     await queryInterface.bulkInsert('Availabilities', 
     [
      {
        name: 'Disponible',
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        name: 'No Disponible',
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /* *
     * Add commands to revert seed here.
     *
     * Example: */
    await queryInterface.bulkDelete('Availabilities', null, {});
    
  }
};
