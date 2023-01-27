const Machine = require("./machine");
const Factory = require("./factory");
const Admin = require("./admin");
const Client = require("./client");

Machine.belongsTo(Factory, {
  foreignKey: { allowNull: false, name: "factoryId" },
  onDelete: "CASCADE",
});
Factory.hasMany(Machine, {
  foreignKey: { allowNull: false, name: "factoryId" },
  onDelete: "CASCADE",
});

// Admin.sync({ alter: true });
// Client.sync({ alter: true });
// Machine.sync({ force: true });
// Factory.sync({ alter: true });
