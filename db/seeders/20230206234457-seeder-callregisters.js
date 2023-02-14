'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* *
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert('CallRegisters', 
    [
      {
        phoneNumberFrom: '11-12345678',
        phoneNumberTo: '11-43218765',
        timeInit: '2023-01-01 21:58:01',
        timeFin: '2023-01-01 22:58:01',
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01',
      },
      {
        phoneNumberFrom: '11-45679876',
        phoneNumberTo: '11-96328963',
        timeInit: '2023-01-01 21:58:01',
        timeFin: '2023-01-01 22:58:01',
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01',
      }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /* *
     * Add commands to revert seed here.
     *
     * Example: */
    await queryInterface.bulkDelete('CallRegisters', null, {});
    
  }
};
