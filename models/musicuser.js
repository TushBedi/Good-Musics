'use strict';
module.exports = (sequelize, DataTypes) => {
  var MusicUser = sequelize.define('MusicUser', {
    UserId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER,
    playlistName: {
// <<<<<<< admin
//       type : DataTypes.STRING,
//       validate :  {
//         notEmpty : {
//           args : true,
//           msg : "Playlist Name is required"
//         }
      
// =======
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Playlist Name is required"
        }

// >>>>>>> development
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
