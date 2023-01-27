const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Factory = sequelize.define("Factory", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Factory;
