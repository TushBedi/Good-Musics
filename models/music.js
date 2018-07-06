'use strict';
module.exports = (sequelize, DataTypes) => {
  var Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {});
  Music.associate = function (models) {
    // associations can be defined here
    Music.belongsToMany(models.User, {through : "MusicUser"})
  };






  return Music;
};
