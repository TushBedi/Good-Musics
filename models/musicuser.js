'use strict';
module.exports = (sequelize, DataTypes) => {
  var MusicUser = sequelize.define('MusicUser', {
    UserId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER,
    playlistName: DataTypes.STRING
  }, {});
  MusicUser.associate = function (models) {
    // associations can be defined here
    MusicUser.belongsTo(models.User)
    MusicUser.belongsTo(models.Music)
  };
  return MusicUser;
};
