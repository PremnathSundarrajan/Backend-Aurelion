const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DB_gettAllRestaurant = async () => {
  return await prisma.restaurant.findMany();
};

const DB_getParticularRestaurant = async (id) => {
  return await prisma.restaurant.findUnique({
    where: { restaurant_id: id },
  });
};

const DB_addRestaurant = async (data) => {
  return await prisma.restaurant.create({
    data: {
      restaurant_image_url: data.restaurant_image_url,
      restaurant_price: data.restaurant_price,
      restaurant_title: data.restaurant_title,
      restaurant_rating: data.restaurant_rating,
      restaurant_category_group: data.restaurant_category_group,
      restaurant_location: data.restaurant_location,
    },
  });
};

const DB_updateRestaurant = async (data) => {
  return await prisma.restaurant.update({
    where: { restaurant_id: data.restaurant_id },
    data,
  });
};

const DB_particularUpdateRestaurant = async (data) => {
  return await prisma.restaurant.update({
    where: { restaurant_id: data.restaurant_id },
    data,
  });
};

const DB_deleteRestaurant = async (data) => {
  return await prisma.restaurant.delete({
    where: { restaurant_id: data.restaurant_id },
  });
};

const DB_check = async(data)=>{
    return await prisma.restaurant.findUnique({
      where: { restaurant_id: data.restaurant_id },
    });

}

module.exports = {
  DB_gettAllRestaurant,
  DB_getParticularRestaurant,
  DB_addRestaurant,
  DB_updateRestaurant,
  DB_particularUpdateRestaurant,
  DB_deleteRestaurant,
  DB_check
};
