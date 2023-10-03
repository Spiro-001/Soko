const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  console.log("Starting PrismaClient");
  const prisma = new PrismaClient();

  console.log("Deleting all Posts");
  await prisma.post.deleteMany({});

  console.log("Creating Posts");
  try {
    for (let x = 0; x < 15; x++) {
      const timeCreated = faker.date.anytime();
      const post = await prisma.post.create({
        data: {
          content: faker.hacker.phrase(),
          tags: [faker.hacker.noun(), faker.hacker.noun(), faker.hacker.noun()],
          userId: "94b54024-efdf-4379-b36c-f2331e8ff079",
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      console.log(`Created Post | ${post.id}`);
    }
    prisma.$disconnect;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};

seed();
