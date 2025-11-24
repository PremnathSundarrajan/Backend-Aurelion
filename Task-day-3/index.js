const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const app = express();

const studentRouter = require('./router/studentRouter');

app.use(express.json());

app.get("/", async (req, res) => {
  

  res.send("Student Data");
});


app.use("/api", studentRouter);
app.listen(3000, () => {
  console.log("server is running");
});
