'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* *
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert('PhoneNumbers', 
    [
      {
        characteristic: 1234,
        number: 5678,
        areaCodeId: 1,
        availabilityId: 2,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        characteristic: 1478,
        number: 8741,
        areaCodeId: 1,
        availabilityId: 2,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        characteristic: 3698,
        number: 8963,
        areaCodeId: 1,
        availabilityId: 2,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        characteristic: 7896,
        number: 4587,
        areaCodeId: 1,
        availabilityId: 1,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        characteristic: 2589,
        number: 9852,
        areaCodeId: 2,
        availabilityId: 1,
        createdAt: "2023-01-01 22:58:01",
        updatedAt: "2023-01-01 22:58:01"
      },
      {
        characteristic: 4563,
        number: 8145,
        areaCodeId: 5,
        availabilityId: 1,
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
    await queryInterface.bulkDelete('PhoneNumbers', null, {});
    
  }
};
