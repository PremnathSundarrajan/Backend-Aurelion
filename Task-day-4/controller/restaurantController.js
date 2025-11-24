const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  DB_gettAllRestaurant,
  DB_getParticularRestaurant,
  DB_addRestaurant,
  DB_updateRestaurant,
  DB_particularUpdateRestaurant,
  DB_deleteRestaurant,
  DB_check
} = require('../service/restaurantService')
const gettAllRestaurant = async (req, res) => {
  try {
    //Data from Frontend

    //DB logic
    const data = await DB_gettAllRestaurant();
    console.log(data);

    //Data to Frontend
    res
      .status(200)
      .json({ data: data, message: "All items are fetched Successfully" });
  }catch (err) {
    console.log(err);
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
};

const getParticularRestaurant = async (req, res) => {
  try {
    //Data from Frontend
    const { id } = req.headers;

    //DB logic
    const data = await DB_getParticularRestaurant(id);

    if (!data) {
      return res.status(404).json({ message: `Restaurant ${id} not Found` });
    }

    //Data to Frontend
    res.status(200).json({ data: data, message: "Restaurant Found" });
  } catch (err) {
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
};

const addRestaurant = async (req, res) => {
  try {
    //Data from Frontend
    const data = req.body;

    //DB logic
    const add = await DB_addRestaurant(data);
    console.log(add);

    //Data to Frontend
    res.status(200).json({ data: add, message: "Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    //Data from Frontend
    const data = req.body;

    //DB logic
    const check =await  DB_check(data);
    if (!check) {
      return res.status(404).json({ message: "Restaurant Not Found" });
    }
    const upd = await DB_updateRestaurant(data);

    //Data to Frontend
    res.status(200).json({ data: upd, message: "Updated Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const particularUpdateRestaurant = async (req, res) => {
  try {
    //Data from Frontend
    const data = req.body;

    //DB logic
    const check = await DB_check(data);

    if (!check) {
      return res.json(404).json({ message: "Data Not found" });
    }

    const update = await DB_particularUpdateRestaurant(data);
    //Data to Frontend
    res.status(200).json({ data: update, message: "updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    //Data from Frontend
    const data = req.query;

    //DB logic
    const get =await  DB_check(data);

    if (!get) return res.status(404).json({ message: "Data is missing" });

    const del = await DB_deleteRestaurant(data);

    //Data to Frontend
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  gettAllRestaurant,
  getParticularRestaurant,
  addRestaurant,
  updateRestaurant,
  particularUpdateRestaurant,
  deleteRestaurant,
};
