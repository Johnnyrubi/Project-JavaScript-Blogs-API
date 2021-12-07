const service = require('../services/post');

const createPost = async (req, res) => {
  const token = req.headers.authorization;
  const result = await service.createPost(token, req.body);
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const token = req.headers.authorization;
  const result = await service.getAll(token);
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const result = await service.getById(token, id);
  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getAll,
  getById,
};
