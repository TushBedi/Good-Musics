const crypto = require('crypto');

const helperpass = (pass) => {
  const salt = 'HANDIPRIYONO' // 'XJHXUXK'; //nanti pake password salt
  const password = crypto.createHmac('sha256', salt)
    .update(pass)
    .digest('hex')
  return password
}


module.exports = helperpass



//
//
// var sha512 = function (password, salt) {
//   var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//   hash.update(password);
//   var value = hash.digest('hex');
//   return {
//     salt: salt,
//     passwordHash: value
//   };
// };
//
//
// function helperpass(userpassword) {
//   var salt = genRandomString(16); /** Gives us salt of length 16 */
//   var passwordData = sha512(userpassword, salt);
//   let hasku = passwordData.passwordHash
//   let saltku = passwordData.salt
//   return saltku
// }
//



// module.exports = helperpass
