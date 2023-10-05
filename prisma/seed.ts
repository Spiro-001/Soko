// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  const seedSetting = {
    users: 20,
    communities: 10,
    posts: 60,
    comments: 100,
    repliesI: 60,
    repliesII: 60,
    userCommunities: 60,
  };
  console.log("Starting PrismaClient");
  const prisma = new PrismaClient();

  // const admin = await prisma.user.create({
  //   data: {
  //     email: "daniel@soko.com",
  //     username: "Soko-daniel",
  //     password_digest:
  //       "$2b$10$CY/4LLy20eCcBVmgsb4eTuMtVTlwMKg/oZrXzfZsozrdZsykL18oK",
  //   },
  // });

  try {
    console.log("Deleting all Users");
    await prisma.user.deleteMany({
      where: {
        NOT: {
          id: "94b54024-efdf-4379-b36c-f2331e8ff079",
        },
      },
    });
    // SEEDING USER
    console.log("Seeding User");
    const users: any[] = [];
    for (let x = 0; x < seedSetting.users; x++) {
      const timeCreated = faker.date.anytime();
      const user = await prisma.user.create({
        data: {
          username: faker.internet.userName(),
          password_digest: faker.internet.password({ length: 12 }),
          email: faker.internet.email(),
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      users.push(user);
      console.log(`Created User | ${user.id}`);
    }
    // SEEDING USER

    // SEEDING COMMUNITY
    console.log("Seeding Community");
    const communities: any[] = [];
    for (let x = 0; x < seedSetting.communities; x++) {
      const timeCreated = faker.date.anytime();
      const community = await prisma.community.create({
        data: {
          title: faker.word.noun({ lenght: { min: 5, max: 12 } }),
          ownerId: users[Math.floor(Math.random() * communities.length)].id,
          description: faker.hacker.phrase(),
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
    // SEEDING COMMUNITY

    // SEEDING POST
    console.log("Seeding Post");
    const posts: any[] = [];
    for (let x = 0; x < seedSetting.posts; x++) {
      const timeCreated = faker.date.anytime();
      const post = await prisma.post.create({
        data: {
          userId: users[Math.floor(Math.random() * users.length)].id,
          communityId:
            communities[Math.floor(Math.random() * communities.length)].id,
          content: faker.hacker.phrase(),
          tags: [
            faker.hacker.noun(),
            faker.hacker.verb(),
            faker.hacker.adjective(),
          ],
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      posts.push(post);
      console.log(`Created Post | ${post.id}`);
    }
    // SEEDING POST

    // SEEDING COMMENT
    console.log("Seeding Comment");
    const comments: any[] = [];
    for (let x = 0; x < seedSetting.comments; x++) {
      const timeCreated = faker.date.anytime();
      const comment = await prisma.comment.create({
        data: {
          userId: users[Math.floor(Math.random() * users.length)].id,
          postId: posts[Math.floor(Math.random() * posts.length)].id,
          content: faker.hacker.phrase(),
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      comments.push(comment);
      console.log(`Created Comment | ${comment.id}`);
    }
    // SEEDING COMMENT

    // SEEDING REPLY I
    console.log("Seeding Reply I");
    const repliesI: any[] = [];
    for (let x = 0; x < seedSetting.repliesI; x++) {
      const timeCreated = faker.date.anytime();
      const reply = await prisma.comment.create({
        data: {
          userId: users[Math.floor(Math.random() * users.length)].id,
          postId: posts[Math.floor(Math.random() * posts.length)].id,
          replyToId: comments[Math.floor(Math.random() * comments.length)].id,
          content: faker.hacker.phrase(),
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      repliesI.push(reply);
      console.log(`Created Reply I | ${reply.id}`);
    }
    // SEEDING REPLY I

    // SEEDING REPLY II
    console.log("Seeding Reply II");
    const repliesII: any[] = [];
    for (let x = 0; x < seedSetting.repliesII; x++) {
      const timeCreated = faker.date.anytime();
      const reply = await prisma.comment.create({
        data: {
          userId: users[Math.floor(Math.random() * users.length)].id,
          postId: posts[Math.floor(Math.random() * posts.length)].id,
          replyToId: repliesI[Math.floor(Math.random() * repliesI.length)].id,
          content: faker.hacker.phrase(),
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      repliesII.push(reply);
      console.log(`Created Reply II | ${reply.id}`);
    }
    // SEEDING REPLY II

    // SEEDING USERCOMMUNITY
    console.log("Seeding UserCommunities");
    const userCommunities: any[] = [];
    const userCommunityMap = new Map();
    for (let x = 0; x < seedSetting.userCommunities; x++) {
      let userId = users[Math.floor(Math.random() * users.length)].id;
      if (!userCommunityMap.has(userId)) {
        userCommunityMap.set(userId, []);
      }
      let communityId =
        communities[Math.floor(Math.random() * communities.length)].id;
      const timeCreated = faker.date.anytime();
      while (userCommunityMap.get(userId).includes(communityId)) {
        communityId =
          communities[Math.floor(Math.random() * communities.length)].id;
      }
      const userCommunity = await prisma.userCommunity.create({
        data: {
          userId,
          communityId,
          createdAt: timeCreated,
          updatedAt: timeCreated,
        },
      });
      userCommunityMap.get(userId).push(communityId);
      userCommunities.push(userCommunity);
      console.log(`Created UserCommunities | ${userCommunity.id}`);
    }
    // SEEDING USERCOMMUNITY

    prisma.$disconnect;
  } catch (error) {
    console.log("Removing seed data...");
    await prisma.user.deleteMany({
      where: {
        NOT: {
          id: "94b54024-efdf-4379-b36c-f2331e8ff079",
        },
      },
    });
    prisma.$disconnect;
    console.log(error);
  }
};

seed();
