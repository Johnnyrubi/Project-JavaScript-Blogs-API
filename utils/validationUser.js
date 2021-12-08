const { User } = require('../models');

const err = (statusCode) => ({ statusCode });

const validationName = (displayName) => {
  if (typeof displayName !== 'string' || displayName.length < 8) {
  throw err({ statusCode: 400, 
    message: '"displayName" length must be at least 8 characters long' });
  }
};

const validationPassword = (password) => {
  if (!password) {
    throw err({
    statusCode: 400, message: '"password" is required' });
  }

  if (password.length < 6) {
    throw err({ statusCode: 400, message: '"password" length must be 6 characters long' });
  }
};

const validationEmail = (email) => {
  if (!email) throw err({ statusCode: 400, message: '"email" is required' });

  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!validEmail) {
    throw err({
      statusCode: 400, message: '"email" must be a valid email' });
  }
};

const searchifEmailExists = async (email) => {
  const search = await User.findOne({ where: { email } });
  if (search) {
    throw err({ statusCode: 409, message: 'User already registered' });
  }
};

const existsById = async (id) => {
  const search = await 
  User.findOne({ where: { id }, attributes: { exclude: ['name', 'password'] } });
  if (!search) {
    throw err({ statusCode: 404, message: 'User doest not exist' });
  }
  return search;
};

const cadastration = async (email, displayName, password) => {
  validationEmail(email);
  await searchifEmailExists(email);
  validationName(displayName);
  validationPassword(password);
};

module.exports = {
  cadastration,
  existsById,
};
