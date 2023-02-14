'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CallCharges', 
    [
      {
        totalCallTime: 15,
        totalToPay: 45.5,
        callRegisterId: 1,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01',
      },
      {
        totalCallTime: 20,
        totalToPay: 65.5,
        callRegisterId: 2,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01',
      }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CallCharges', null, {});
    
  }
};
