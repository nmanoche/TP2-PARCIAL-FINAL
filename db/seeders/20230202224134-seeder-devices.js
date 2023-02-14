'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* *
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert('Devices', 
    [
      {
        brand: "Samsung",
        model: "S20",
        imei: "010928/00/389023/3",
        locked: 0,
        phoneNumberId: 1,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        brand: "Samsung",
        model: "S53",
        imei: "010929/00/389023/2",
        locked: 0,
        phoneNumberId: 2,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        brand: "Motorola",
        model: "G52",
        imei: "010930/00/389024/3",
        locked: 0,
        phoneNumberId: 3,
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
    await queryInterface.bulkDelete('Devices', null, {});
    
  }
};
