const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const z = require("zod");
const {
  DB_getAllStudent,
  DB_getParticularStudent,
  DB_addStudent,
  DB_updateStudent,
  DB_particularUpdateStudent,
  DB_deleteStudent,
  DB_check,
} = require('../service/studentService')

const getParticularStudentSchema = z.object({
  id:z.string()
});

const addStudentSchema = z.object({
  roll_no : z.string(),
  name: z.string(),
  dob: z.string(),
  class:z.string()
})

const updateStudentSchema = z.object({
  roll_no : z.string(),
  name: z.string(),
  dob: z.string(),
  class:z.string()
})

const deleteStudentSchema = z.object({
  roll_no : z.string()
})


const getAllStudent = async (req, res) => {
  const data = await DB_getAllStudent();

  console.log(data);

  res.send(data);
};

const getParticularStudent = async (req, res) => {
  const { id } = getParticularStudentSchema.parse(req.params);
  const data = await DB_getParticularStudent(id);

  console.log(data);
  res.send(data);
};

const addStudent = async (req, res) => {
  const data =addStudentSchema.parse(req.body);
  console.log(data);

  const create = await DB_addStudent(data);
  res.send(create);
};

const updateStudent = async (req, res) => {
  const data = updateStudentSchema.parse(req.body);
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
  const data = deleteStudentSchema.parse(req.query);
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
