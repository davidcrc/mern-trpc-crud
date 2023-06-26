import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext, router } from "./server/trpc";

dotenv.config();

const app = express();
app.use(morgan("dev"));

const appRouter = router({});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext, //for authentication
  })
);

export default app;
