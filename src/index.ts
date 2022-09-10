import mongoose from "mongoose";

import { app } from "./app";
import connect from "./db/index";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    connect();
  } catch (err) {
    console.error(err);
  }

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
};

start();
