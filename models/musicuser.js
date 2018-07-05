'use strict';
module.exports = (sequelize, DataTypes) => {
  var MusicUser = sequelize.define('MusicUser', {
    UserId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER,
    playlistName: {
      type : DataTypes.STRING,
      validate :  {
        notEmpty : {
          args : true,
          msg : "Playlist Name is required"
        }
      
      }
    }
  }, {});
  MusicUser.associate = function (models) {
    // associations can be defined here
    MusicUser.belongsTo(models.User)
    MusicUser.belongsTo(models.Music)
  };
  return MusicUser;
  
};
