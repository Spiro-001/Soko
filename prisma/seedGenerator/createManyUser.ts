import { generateHashPass } from "@/utils/generateHashPass";
import { Faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

const createManyUser = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  faker: Faker
) => {
  const users: any[] = [];
  for (let x = 0; x < 15; x++) {
    const timeCreated = faker.date.anytime();
    const password_digest = await generateHashPass(
      faker.internet.password({ length: 12 })
    );

    const user = await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        password_digest,
        email: faker.internet.email(),
        createdAt: timeCreated,
        updatedAt: timeCreated,
      },
    });
    users.push(user);
    console.log(`Created User | ${user.id}`);
  }
  return users;
};

module.exports = { createManyUser };
