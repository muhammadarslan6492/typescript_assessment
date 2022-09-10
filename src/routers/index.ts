import express from "express";

import ContactRouter from "./contact";

const router = express.Router();

router.use("/contact", ContactRouter);

export default router;
