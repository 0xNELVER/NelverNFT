import bcrypt from "bcrypt";
import { env } from "@nelver/env.mjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(parseInt(env.HASH_SALT_ROUND, 10));
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
