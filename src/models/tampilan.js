"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tampilan extends Model {
    static associate(models) {
      Tampilan.belongsTo(models.Jabatan, { foreignKey: "jabatan_id" });
      Tampilan.belongsTo(models.Daftar_surat, { foreignKey: "surat_id" });
    }
  }
  Tampilan.init(
    {
      pin: DataTypes.BOOLEAN,
      dibaca: DataTypes.BOOLEAN,
      jabatan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Jabatan",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      surat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Daftar_surat",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "Tampilan",
    }
  );
  return Tampilan;
};
