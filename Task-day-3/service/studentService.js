const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DB_getAllStudent = async () => {
  return await prisma.student.findMany();
};

const DB_getParticularStudent = async (id) => {
  return await prisma.student.findUnique({ where: { roll_no: id } });
};

const DB_addStudent = async (data) => {
  return await prisma.student.create({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      dob: data.dob,
      class: data.class,
    },
  });
};

const DB_updateStudent = async (data) => {
  return await prisma.student.update({
    where: { roll_no: data.roll_no },
    data: {
      name: data.name,
      dob: data.dob,
      class: data.class,
    },
  });
};

const DB_particularUpdateStudent = async (data) => {
  return await prisma.student.update({
    where: { roll_no: data.roll_no },
    data,
  });
};

const DB_deleteStudent = async (data) => {
  return await prisma.student.delete({ where: { roll_no: data.roll_no} });
};

const DB_check = async (data) => {
  return await prisma.student.findUnique({
    where: { roll_no: data.roll_no },
  });
};

module.exports = {
  DB_getAllStudent,
  DB_getParticularStudent,
  DB_addStudent,
  DB_updateStudent,
  DB_particularUpdateStudent,
  DB_deleteStudent,
  DB_check,
};
