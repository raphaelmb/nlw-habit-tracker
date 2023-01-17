import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  return await prisma.habit.findMany();
});

app.listen({ port: 3333 }).then(() => console.log("Server is running..."));
