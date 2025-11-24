const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const {
  getAllStudent,
  getParticularStudent,
  addStudent,
  updateStudent,
  particularUpdateStudent,
  deleteStudent,
} = require('../controller/studentController')

const studentRouter = express.Router();

studentRouter.get("/student", getAllStudent);

studentRouter.get("/student/:id",getParticularStudent);

studentRouter.post("/new",addStudent );

studentRouter.put("/update", updateStudent);

studentRouter.patch("/speupd",particularUpdateStudent);

studentRouter.delete("/del",deleteStudent );

module.exports = studentRouter;