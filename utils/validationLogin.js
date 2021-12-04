const { User } = require('../models');
const generationToken = require('./generationToken');

const err = (statusCode) => ({ statusCode });

// const searchUSer = async (email, password) => {
//  const search = await User.findOne({ where: { email, password }});
//  if (!search) throw err({ statusCode: 400, message: 'invalid fields' });
// };

const validationEmail = (email) => {
  if (!email) throw err({ statusCode: 400, message: '"email" is required' });
  if (email === '') throw err({ statusCode: 400, message: '"Email" is not allowed to be empty' });
};

const validationPassword = (password) => {
  if (!password) throw err({ statusCode: 400, message: '"password" is required' });
  if (password === '') { 
    throw err({ statusCode: 400, message: '"password" is not allowed to be empty' });
  }
};

const makeLogin = async (email, password) => {
  const search = await User.findOne({ where: { email, password } });
  const token = generationToken(search);
  if (!search) throw err({ statusCode: 400, message: 'invalid fields' });
  return token;
};

const validationLogin = (email, password) => {
  validationEmail(email);
  validationPassword(password);
  makeLogin(email, password);
  // searchUSer(email),
};

module.exports = {
  validationLogin,
};
