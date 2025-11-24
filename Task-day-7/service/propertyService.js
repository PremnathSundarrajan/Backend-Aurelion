const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DB_getAllProperty = async () => {
  return await prisma.property.findMany({
    include: { property_location: true, property_category: true },
  });
};

const DB_getParticularProperty = async (id) => {
  return await prisma.property.findUnique({
    where: { property_id: id },
    include: { property_location: true, property_category: true },
  });
};

const DB_addProperties = async (body) => {
  return await prisma.property.create({
    data: {
      property_title: body.property_title,
      property_rating: body.property_rating,
    },
  });
};

const DB_addCategories = async () => {
  return await prisma.property_Category.create({
    data: {
      property_photo: body.property_photo,
      property_member_limit: body.property_member_limit,
      property_bedroom: body.property_bedroom,
      property_bathroom: body.property_bathroom,
      property_price: body.property_price,
      property_id: body.property_id,
    },
  });
};

const DB_addLocations = async (body) => {
  return await prisma.property_Location.create({
    data: {
      main_branch: body.main_branch,
      available_locations: body.available_locations,
      property_id: body.property_id,
    },
  });
};

const DB_updateProperties = async (body) => {
  return await prisma.property.update({
    where: { property_id: body.property_id },
    data: body,
  });
};

const DB_updateCategories = async (body) => {
  return await prisma.property_Category.update({
    where: { property_category_id: body.property_category_id },
    data: body,
  });
};

const DB_updateLocations = async (body) => {
  return await prisma.property_Location.update({
    where: { property_location_id: body.property_location_id },
    data: body,
  });
};

const DB_particularUpdateProperties = async (body) => {
  return await prisma.property.update({
    where: { property_id: body.property_id },
    data: body,
  });
};

const DB_particularUpdateCategories = async (body) => {
  return await prisma.property_Category.update({
    where: { property_category_id: body.property_category_id },
    data: body,
  });
};

const DB_particularUpdateLocations = async (body) => {
  return await prisma.property_Location.update({
    where: { property_location_id: body.property_location_id },
    data: body,
  });
};

const DB_deleteProperties = async (id) => {
  return await prisma.property.delete({ where: { property_id: id } });
};

const DB_deleteCategories = async (id) => {
  return await prisma.property_Category.delete({
    where: { property_category_id: id },
  });
};

const DB_deleteLocations = async (id) => {
  return await prisma.property_Location.delete({
    where: { property_location_id: id },
  });
};

const DB_propertyCheck = async(body)=>{
    return await prisma.property.findUnique({
      where: { property_id: body.property_id },
    });
}

const DB_categoryCheck = async(body)=>{
    return  await prisma.property_Category.findUnique({
      where: { property_category_id: body.property_category_id },
    });
}

const DB_locationCheck = async (body)=>{
    return prisma.property_Location.findUnique({
      where: { property_location_id: body.property_location_id },
    });
}

module.exports = {
  DB_getAllProperty,
  DB_getParticularProperty,
  DB_addProperties,
  DB_addCategories,
  DB_addLocations,
  DB_updateProperties,
  DB_updateCategories,
  DB_updateLocations,
  DB_particularUpdateProperties,
  DB_particularUpdateCategories,
  DB_particularUpdateLocations,
  DB_deleteProperties,
  DB_deleteCategories,
  DB_deleteLocations,
  DB_propertyCheck,
  DB_categoryCheck,
  DB_locationCheck
};
