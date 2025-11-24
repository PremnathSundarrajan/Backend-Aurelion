const express = require("express");

const propertyRouter = require('./router/propertyRouter')
var morgan = require('morgan');
const app = express();
app.use(express.json());
const methodFinder = (req,res,next)=>{
    console.log(`Method : ${req.method}`);
    next();
}
app.use(methodFinder);

app.get("/", async (req, res) => {
  try {
    res.send("Welcome to Airbnb")
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.use("/api", propertyRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
