const Types = require("../models/types.models");

const getAllTypes = async () => {
  const data = await Types.findAll();
  return data;
};

const getTypeById = async (id) => {
  const data = await Types.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createType = async (name) => {
  const data = await Types.create({ name });
  return data;
};

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
};
