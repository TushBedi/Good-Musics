'use strict';
module.exports = (sequelize, DataTypes) => {
  var MusicUser = sequelize.define('MusicUser', {
    UserId: DataTypes.INTEGER,
    MusicId: DataTypes.STRING,
    playlistName: DataTypes.STRING
  }, {});
  MusicUser.associate = function (models) {
    // associations can be defined here
  };
  return MusicUser;
};
