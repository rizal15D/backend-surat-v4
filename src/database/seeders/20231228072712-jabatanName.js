"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Jabatans",
      [
        {
          id: 2,
          name: "Prodi",
          jabatan_atas_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Tata Usaha",
          jabatan_atas_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Dekan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   id: 5,
        //   name: "Admin Dekan",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Jabatans", null, {});
  },
};
