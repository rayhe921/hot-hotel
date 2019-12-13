module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.TEXT
  });
  return Client;
};
