const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const propertyRouter = express.Router();
const {
  getAllProperty,
  getParticularProperty,
  addProperties,
  addCategories,
  addLocations,
  updateProperties,
  updateCategories,
  updateLocations,
  particularUpdateProperties,
  particularUpdateCategories,
  particularUpdateLocations,
  deleteProperties,
  deleteCategories,
  deleteLocations,
} = require("../controller/propertyController");
propertyRouter.get("/property", getAllProperty);

propertyRouter.get("/property/:id", getParticularProperty);

propertyRouter.post("/properties", addProperties);

propertyRouter.post("/properties/categories", addCategories);

propertyRouter.post("/properties/locations", addLocations);

propertyRouter.put("/properties/update", updateProperties);

propertyRouter.put("/properties/categories/update", updateCategories);

propertyRouter.put("/properties/locations/update", updateLocations);

propertyRouter.patch("/properties/specific/update", particularUpdateProperties);

propertyRouter.patch(
  "/properties/categories/specific/update",
  particularUpdateCategories
);

propertyRouter.patch(
  "/properties/locations/specific/update",
  particularUpdateLocations
);

propertyRouter.delete("/properties/delete", deleteProperties);

propertyRouter.delete("/properties/categories/delete", deleteCategories);

propertyRouter.delete("/properties/locations/delete", deleteLocations);

module.exports = propertyRouter;
