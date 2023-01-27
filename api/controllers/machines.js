const services = require("../services/machines");
const factoryServices = require("../services/factories");

const get = async (req, res, next) => {
  try {
    const result = await services.get();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await services.getById(req.params.id);
    if (!result) {
      res.sendStatus(404);
      return;
    }
    const factory = await factoryServices.getById(result.factoryId);
    result.factory = factory;
    delete result.factoryId;
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await services.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await services.update(req.params.id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const result = await services.deleteById(req.params.id);
    if (!result) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
