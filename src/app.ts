import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { config } from "dotenv";
import cors from "cors";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import Router from "./routers/index";

config();

const app = express();
app.use(json());

app.use(cors());

app.use("/api/v1", Router);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
