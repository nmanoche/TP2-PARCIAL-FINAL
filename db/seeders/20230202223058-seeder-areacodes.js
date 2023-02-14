'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* *
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert('AreaCodes', 
    [
      {
        city: "Cordoba",
        code: 35,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        city: "Buenos Aires",
        code: 11,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        city: "Formosa",
        code: 37,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        city: "La Plata",
        code: 38,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        city: "Resistencia",
        code: 36,
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
    await queryInterface.bulkDelete('AreaCodes', null, {});
    
  }
};
