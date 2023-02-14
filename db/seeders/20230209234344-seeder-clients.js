'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Clients', 
    [
      {
        name: 'John Doe',
        lastname: 'Morales',
        dni: 12123123,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01'
      },
      {
        name: 'Javier',
        lastname: 'Marcano',
        dni: 14789654,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01'
      },
      {
        name: 'Lidia',
        lastname: 'Sanchez',
        dni: 96852147,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01'
      },
      {
        name: 'Jose',
        lastname: 'Lopez',
        dni: 23654987,
        createdAt: '2023-01-01 22:58:01',
        updatedAt: '2023-01-01 22:58:01'
      },
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Clients', null, {});
    
  }
};
