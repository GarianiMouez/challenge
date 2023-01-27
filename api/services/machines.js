const Machine = require("../models/machine");

const get = async () => {
  try {
    const result = await Machine.findAll({
      attributes: [
        "id",
        "name",
        "reference",
        "category",
        "image",
        "status",
        "factoryId",
        "createdAt",
        "updatedAt",
      ],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const result = await Machine.findByPk(id, {
      attributes: [
        "id",
        "name",
        "reference",
        "category",
        "image",
        "status",
        "factoryId",
        "createdAt",
        "updatedAt",
      ],
    });
    return result.dataValues;
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const result = await Machine.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    const result = await Machine.update(data, { where: { id } });
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
    const result = await Machine.destroy({
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
