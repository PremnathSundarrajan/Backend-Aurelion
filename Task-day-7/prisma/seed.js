// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const properties = [
    {
      Property_title: "Luxury Sea View Villa",
      Property_photo: "https://example.com/property1.jpg",
      Property_member_limit: "6",
      Property_bedroom: 3,
      Property_bathroom: 3,
      Property_price: "₹12,000/night",
      Property_location: "Goa"
    },
    {
      Property_title: "Cozy Mountain Cottage",
      Property_photo: "https://example.com/property2.jpg",
      Property_member_limit: "4",
      Property_bedroom: 2,
      Property_bathroom: 1,
      Property_price: "₹6,500/night",
      Property_location: "Manali"
    },
    {
      Property_title: "Modern City Apartment",
      Property_photo: "https://example.com/property3.jpg",
      Property_member_limit: "3",
      Property_bedroom: 1,
      Property_bathroom: 1,
      Property_price: "₹4,000/night",
      Property_location: "Bangalore"
    }
  ];

  for (const property of properties) {
    await prisma.property.create({
      data: property
    });
  }

  console.log("🌱 Property seed inserted successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error inserting property seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
