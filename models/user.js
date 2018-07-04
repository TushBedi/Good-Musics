'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "user"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "wrong email format!"
        },
        notEmpty: {
          args: true,
          msg: "No empty plz"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "password jangan kosong"
        }
      }
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };






  // Instance Method
  User.prototype.getSay = function () {

    return 'coba-' + this.name

    // return `${this.first_name} ${this.last_name}`
    //
    // var today = new Date()
    // var curHr = today.getHours()
    //
    // if (curHr < 12) {
    //   console.log('good morning')
    // } else if (curHr < 18) {
    //   console.log('good afternoon')
    // } else {
    //   console.log('good evening')
    // }


  }







  return User;
};
