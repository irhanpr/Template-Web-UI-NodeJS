/**
 *
 * @author prbs
 * @created 31-01-21.
 *
 */
"use strict";

const DataTypes = require("sequelize");
const globals = require("../helpers/globals");

const icd_nine = globals.sequelize.define(
  "icd_nine",
  {
    person_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      unsigned: true,
      autoIncrement: true,
    },
    icd_nines_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Disease",
    },
    icd_nines_code: { type: DataTypes.STRING(255), allowNull: false },
    age: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      unsigned: true,
      validate: { isicdninecode: true },
    },
    icd_nines_type: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      unsigned: true,
      validate: { isNumeric: true },
    },
    createdAt: {
      type: DataTypes.TIMESTAMP(255),
      allowNull: false,
      validate: { iscreatedAt: true },
    },
    updatedAt: {
      type: DataTypes.TIMESTAMP(255),
      allowNull: false,
      validate: { isupdatedAt: true },
    },
  },
  {
    timestamp: true,
    underscored: true,
    freezeTableName: true,
    tableName: "icd_nine",
  }
);

module.exports = icd_nine;
