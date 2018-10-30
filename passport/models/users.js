'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    secretpin: DataTypes.STRING,
    friends: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    users.belongsToMany(models.friendship, { as: 'friend2', through: 'user_fs', foreignKey: 'userId' })
  };
  return users;
};