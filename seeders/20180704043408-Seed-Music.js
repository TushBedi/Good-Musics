'use strict';

const fs = require("fs");
let files = fs.readFileSync(__dirname + '/../songs.csv','utf8').split('\n');
let musics = [];
for (let i = 0; i < files.length; i++) {
  let file = files[i].split(',')
  let obj = {
    title: file[1],
    category: file[2],
    artist: file[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  musics.push(obj);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Music', musics, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkInsert('Music', null, {})
  }
};
