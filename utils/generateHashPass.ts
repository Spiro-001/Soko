import { genSalt, hash } from "bcrypt";

export const generateHashPass = async (password: string) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  const password_digest = await hash(password, salt);
  return password_digest;
};

module.exports = generateHashPass;
