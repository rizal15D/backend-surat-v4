"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class STATUS extends Model {
    static associate(models) {
      STATUS.belongsTo(models.DAFTAR_SURAT, { foreignKey: "surat_id" });
      // Status.belongsTo(models.Jabatan, {
      //   foreignKey: "jabatan_id",
      //   as: "jabatan",
      // });
    }
  }
  STATUS.init(
    {
      surat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "DAFTAR_SURAT",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      // jabatan_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Jabatan",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // },
      status: DataTypes.STRING,
      persetujuan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "STATUS",
      tableName: "STATUS",
    }
  );
  return STATUS;
};
