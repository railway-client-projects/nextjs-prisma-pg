import { prismaClientInit } from "../../services/PrismaClientInit";

export const getEmps = async () => {
  const res = await prismaClientInit().employees.findMany();
  console.log(res);
};
