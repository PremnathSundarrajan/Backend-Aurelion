const express = require("express");
const { PrismaClient } = require("@prisma/client");
const restaurantRouter = require("./router/restaurantRouter");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    //Data from Frontend

    //DB logic
    
    res.status(200).json({message: "Welcome to Restaurant" });
  } catch (err) {
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

app.use("/api", restaurantRouter)


app.listen(3000, () => {
  console.log("Server is running");
});
