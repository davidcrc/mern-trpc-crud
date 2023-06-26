import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext, router } from "./server/trpc";
import { notesRouter } from "./routes/notes";
import cors from "cors";

dotenv.config();

const app = express();

const appRouter = router({
  notes: notesRouter,
});

app.use(cors()); // add cors any body can request
app.use(morgan("dev"));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext, //for authentication
  })
);

export type AppRouter = typeof appRouter;

export default app;
