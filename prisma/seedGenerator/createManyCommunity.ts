import { Faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

const createManyCommunity = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  faker: Faker,
  users: any[]
) => {
  const communities: any[] = [];
  for (let x = 0; x < 15; x++) {
    const timeCreated = faker.date.anytime();
    const community = await prisma.community.create({
      data: {
        title: "",
        ownerId: users[Math.floor(Math.random() * communities.length)].id,
        description: "",
        tags: [
          faker.hacker.noun(),
          faker.hacker.verb(),
          faker.hacker.adjective(),
        ],
        createdAt: timeCreated,
        updatedAt: timeCreated,
      },
    });
    communities.push(community);
    console.log(`Created Community | ${community.id}`);
  }
  return communities;
};

module.exports = { createManyCommunity };
