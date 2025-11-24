const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  DB_getAllStudent,
  DB_getParticularStudent,
  DB_addStudent,
  DB_updateStudent,
  DB_particularUpdateStudent,
  DB_deleteStudent,
  DB_check,
} = require('../service/studentService')
const getAllStudent = async (req, res) => {
  const data = await DB_getAllStudent();

  console.log(data);

  res.send(data);
};

const getParticularStudent = async (req, res) => {
  const { id } = req.params;
  const data = await DB_getParticularStudent(id);

  console.log(data);
  res.send(data);
};

const addStudent = async (req, res) => {
  const data = req.body;
  console.log(data);

  const create = await DB_addStudent(data);
  res.send(create);
};

const updateStudent = async (req, res) => {
  const data = req.body;
  console.log(data);
  const get = await DB_check(data);

  if (!get) {
    console.log("Not Found");
    res.send("Not found to upd");
  } else {
    const upd = await DB_updateStudent(data);

    res.json(upd);
  }
};

const particularUpdateStudent = async (req, res) => {
  const data = req.body;
  const get = await DB_check(data);

  if (!get) res.send("Not found to upd");
  else {
    const upd = await DB_particularUpdateStudent(data);

    res.send(upd);
  }
};

const deleteStudent = async (req, res) => {
  const data = req.query;
  const get = await DB_check(data);

  if (!get) res.send("Not found to del");
  else {
    const del = await DB_deleteStudent(data);
    res.send("Deleted");
  }
};

module.exports = {
  getAllStudent,
  getParticularStudent,
  addStudent,
  updateStudent,
  particularUpdateStudent,
  deleteStudent,
};
