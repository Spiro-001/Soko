import { generateHashPass } from "@/utils/generateHashPass";
import { prisma } from ".";

export const createUser = async ({
  email,
  username,
  password,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const password_digest = await generateHashPass(password);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password_digest,
      },
    });
    prisma.$disconnect;
    return user;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
