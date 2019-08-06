// Create password hash util
// --------------------------------------------------
const crypto = require('crypto');

const hashPassword = (plainText) => {
  return crypto.createHmac('sha256', 'secret key')
    .update(plainText)
    .digest('hex');
}
// --------------------------------------------------

module.exports = { hashPassword };