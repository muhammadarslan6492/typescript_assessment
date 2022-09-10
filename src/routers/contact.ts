import express from "express";

import {
  ContactCreateValidator,
  UpdateContactValidator,
} from "../middlewares/validator";
import ContactController from "../controllers/contact";

const router = express.Router();

router.post("/", ContactCreateValidator, ContactController.createContact);
router.get("/", ContactController.contacts);
router.put("/:id", UpdateContactValidator, ContactController.updateContact);
router.delete("/:id", ContactController.deleteContact);

export default router;
