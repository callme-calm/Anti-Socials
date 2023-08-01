// const crypto = require('crypto');
import crypto from 'crypto'

const generateJwtKey = () => {
  const jwtKey = crypto.randomBytes(32).toString('hex');
  return jwtKey;
};

console.log(generateJwtKey());
