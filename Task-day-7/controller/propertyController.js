
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  DB_getAllProperty,
  DB_getParticularProperty,
  DB_addProperties,
  DB_addCategories,
  DB_addLocations,
  DB_updateProperties,
  DB_updateCategories,
  DB_updateLocations,
  DB_particularUpdateProperties,
  DB_particularUpdateCategories,
  DB_particularUpdateLocations,
  DB_deleteProperties,
  DB_deleteCategories,
  DB_deleteLocations,
  DB_propertyCheck,
  DB_categoryCheck,
  DB_locationCheck
} = require('../service/propertyService')
const getAllProperty = async (req, res) => {
  try {
    const data = await DB_getAllProperty();

    res
      .status(200)
      .json({ data: data, message: "All properties displayes successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const getParticularProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await DB_getParticularProperty(id);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const addProperties = async (req, res) => {
  try {
    const body = req.body;

    const data =await  DB_addProperties(body)
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const addCategories = async (req, res) => {
  try {
    const body = req.body;

    const data = await DB_addCategories();
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const addLocations = async (req, res) => {
  try {
    const body = req.body;

    const data = await DB_addLocations(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const updateProperties = async (req, res) => {
  try {
    const body = req.body;
    const check = await DB_propertyCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await DB_updateProperties(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const updateCategories = async (req, res) => {
  try {
    const body = req.body;
    const check =await DB_categoryCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data =await DB_updateCategories(body)
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const updateLocations = async (req, res) => {
  try {
    const body = req.body;
    const check = await DB_locationCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await DB_updateLocations(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const particularUpdateProperties = async (req, res) => {
  try {
    const body = req.body;
    const check = await  DB_propertyCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await DB_particularUpdateProperties(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const particularUpdateCategories = async (req, res) => {
  try {
    const body = req.body;
    const check = await DB_categoryCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await DB_particularUpdateCategories(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const particularUpdateLocations = async (req, res) => {
  try {
    const body = req.body;
    const check = await DB_locationCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await DB_particularUpdateLocations(body);
    console.log(data);
    res
      .status(200)
      .json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const deleteProperties = async (req, res) => {
  try {
    const { id } = req.query;
    const check = await  DB_propertyCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await DB_deleteProperties(id);
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const deleteCategories = async (req, res) => {
  try {
    const { id } = req.query;
    const check = await DB_categoryCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await DB_deleteCategories(id);
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

const deleteLocations = async (req, res) => {
  try {
    const { id } = req.query;
    const check = await DB_locationCheck(body);
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data =await DB_deleteLocations(id);
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
};

module.exports = {
  getAllProperty,
  getParticularProperty,
  addProperties,
  addCategories,
  addLocations,
  updateProperties,
  updateCategories,
  updateLocations,
  particularUpdateProperties,
  particularUpdateCategories,
  particularUpdateLocations,
  deleteProperties,
  deleteCategories,
  deleteLocations,
};
