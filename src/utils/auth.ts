import bcrypt from "bcrypt";
import { env } from "@nelver/env.mjs";

export const hash = async (plainText: string): Promise<string> => {
  const salt = await bcrypt.genSalt(parseInt(env.HASH_SALT_ROUND, 10));
  return await bcrypt.hash(plainText, salt);
};

export const compare = async (plainText: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(plainText, hash);
};
