const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
var morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
const methodFinder = (req,res,next)=>{
    console.log(`Method : ${req.method}`);
    next();
}
app.use(methodFinder);

app.get("/", async (req, res) => {
  try {
    const data = await prisma.property.findMany();

    res.status(200).json({ sata: data, message: "All properties displayes successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.get("/property/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await prisma.property.findUnique({
      where: { Property_id: id },
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.post("/properties", async (req, res) => {
  try {
    const body = req.body;

    const data = await prisma.property.create({
      data: {
        Property_title: body.Property_title,
        Property_photo: body.Property_photo,
        Property_member_limit: body.Property_member_limit,
        Property_bedroom: body.Property_bedroom,
        Property_bathroom: body.Property_bathroom,
        Property_price: body.Property_price,
        Property_location: body.Property_location,
      },
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.put("/property/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property.findUnique({
      where: { Property_id: body.Property_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property.update({
      where: { Property_id: body.Property_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.patch("/property/specific/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property.findUnique({
      where: { Property_id: body.Property_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property.update({
      where: { Property_id: body.Property_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.delete("/property/delete", async (req, res) => {
  try {
    const { id } = req.query;
    const check = await prisma.property.findUnique({
      where: { Property_id: id },
    });
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await prisma.property.delete({ where: { Property_id: id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});
app.listen(3000, () => {
  console.log("Server is running");
});
