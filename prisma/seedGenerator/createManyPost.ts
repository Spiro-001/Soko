import { Faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

const createManyPosts = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  faker: Faker,
  communities: any[],
  users: any[]
) => {
  const posts: any[] = [];
  for (let x = 0; x < 15; x++) {
    const timeCreated = faker.date.anytime();
    const post = await prisma.post.create({
      data: {
        communityId:
          communities[Math.floor(Math.random() * communities.length)].id,
        content: faker.hacker.phrase(),
        tags: [
          faker.hacker.noun(),
          faker.hacker.verb(),
          faker.hacker.adjective(),
        ],
        userId: users[Math.floor(Math.random() * communities.length)].id,
        createdAt: timeCreated,
        updatedAt: timeCreated,
      },
    });
    posts.push(post);
    console.log(`Created Post | ${post.id}`);
  }
  return posts;
};

module.exports = { createManyPosts };
