import { PrismaClient } from "@prisma/client";

export const prismaClientInit = () => {
  return new PrismaClient();
};
