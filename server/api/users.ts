import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const randomString = Math.random().toString(36).substring(7);
  const domain = "gmail.com";
  let email = `user_${randomString}@${domain}`;

  await prisma.users.create({
    data: {
      name: randomString,
      email: email,
      password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)),
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const allUsers = await prisma.users.findMany({
    orderBy: {
      id: "desc",
    },
  });

  await prisma.$disconnect();

  return allUsers.map((user) => ({
    ...user,
    id: user.id.toString(),
  }));
});
