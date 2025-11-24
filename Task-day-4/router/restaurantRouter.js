const express = require('express');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const restaurantRouter = express.Router();

const {
  gettAllRestaurant,
  getParticularRestaurant,
  addRestaurant,
  updateRestaurant,
  particularUpdateRestaurant,
  deleteRestaurant,
} = require('../controller/restaurantController');

restaurantRouter.get("/restaurant",gettAllRestaurant );

restaurantRouter.get("/get", getParticularRestaurant);

restaurantRouter.post("/restaurants", addRestaurant);

restaurantRouter.put("/restaurants/update",updateRestaurant );

restaurantRouter.patch("/restaurants/specific/update", particularUpdateRestaurant);

restaurantRouter.delete("/delete", deleteRestaurant);

module.exports = restaurantRouter;