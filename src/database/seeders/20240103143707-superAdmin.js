"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = "admin";
    const hashedPassword = await bcrypt.hash(password, 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "Super Admin",
          email: "admin",
          password: hashedPassword,
          jabatan_id: 1,
          prodi_id: 1,
          fakultas_id: 1,
          aktif: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
