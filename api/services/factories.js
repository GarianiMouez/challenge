const Factory = require("../models/factory");

const get = async () => {
  try {
    const result = await Factory.findAll({
      attributes: ["id", "name", "address", "createdAt", "updatedAt"],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const result = await Factory.findByPk(id, {
      attributes: ["id", "name", "address", "createdAt", "updatedAt"],
    });
    return result.dataValues;
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const result = await Factory.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    const result = await Factory.update(data, { where: { id } });
    if (!result || result[0] != 1) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const result = await Factory.destroy({
      where: {
        id,
      },
    });
    if (result === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
