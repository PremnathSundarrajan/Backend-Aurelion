const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
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
    const data = await prisma.property.findMany({include:{property_location:true, property_category:true}});

    res.status(200).json({ data: data, message: "All properties displayes successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.get("/property/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await prisma.property.findUnique({
      where: { property_id: id },
      include:{property_location:true, property_category:true}
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
        property_title : body.property_title,
        property_rating : body.property_rating,  
        
      },
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.post("/properties/categories", async (req,res)=>{
  try{
      const body  = req.body;

      const data = await prisma.property_Category.create({
        data:{
          property_photo     : body.property_photo,
          property_member_limit : body.property_member_limit,
          property_bedroom      : body.property_bedroom,
          property_bathroom     : body.property_bathroom,
          property_price        : body.property_price,
          property_id           : body.property_id
        }
      });
      console.log(data);
      res.status(200).json({ data: data, message: "Property added successfully" });   
  }catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
  
})

app.post("/properties/locations", async (req,res)=>{
  try{
      const body  = req.body;

      const data = await prisma.property_Location.create({
        data:{
          main_branch     : body.main_branch,
          available_locations : body.available_locations,
          property_id           : body.property_id
        }
      });
      console.log(data);
      res.status(200).json({ data: data, message: "Property added successfully" });   
  }catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
  
})


app.put("/properties/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property.findUnique({
      where: { property_id: body.property_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property.update({
      where: { property_id: body.property_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});


app.put("/properties/categories/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property_Category.findUnique({
      where: { property_category_id: body.property_category_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property_Category.update({
      where: { property_category_id: body.property_category_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.put("/properties/locations/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property_Location.findUnique({
      where: { property_location_id: body.property_location_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property_Location.update({
      where: { property_location_id: body.property_location_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.patch("/properties/specific/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property.findUnique({
      where: { property_id: body.property_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property.update({
      where: { property_id: body.property_id },
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.patch("/properties/categories/specific/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property_Category.findUnique({
      where: { property_category_id: body.property_category_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property_Category.update({
      where: {property_category_id: body.property_category_id},
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.patch("/properties/locations/specific/update", async (req, res) => {
  try {
    const body = req.body;
    const check = await prisma.property_Location.findUnique({
      where: { property_location_id: body.property_location_id },
    });
    if (!check) {
      res.status(404).json({ message: "Property missing" });
    }
    const data = await prisma.property_Location.update({
      where: {property_location_id: body.property_location_id},
      data: body,
    });
    console.log(data);
    res.status(200).json({ data: data, message: "Property updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});


app.delete("/properties/delete", async (req, res) => {
  try {
    const { id } = req.query;
    const check = await prisma.property.findUnique({
      where: { property_id: id },
    });
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await prisma.property.delete({ where: { property_id: id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.delete("/properties/categories/delete", async (req, res) => {
  try {
    const { id } = req.query;
    const check = await prisma.property_Category.findUnique({
      where: { property_category_id: id },
    });
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await prisma.property_Category.delete({ where: { property_category_id: id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

app.delete("/properties/locations/delete", async (req, res) => {
  try {
    const { id } = req.query;
    const check = await prisma.property_Location.findUnique({
      where: { property_location_id: id },
    });
    if (!check) {
      res.status(404).json({ message: "Property already missing" });
    }
    const data = await prisma.property_Location.delete({ where: { property_location_id: id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});


app.listen(3000, () => {
  console.log("Server is running");
});
