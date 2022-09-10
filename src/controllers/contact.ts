import { Request, Response } from "express";

import Contact from "../models/contact";

export default {
  createContact: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const checkExist = await Contact.findOne({ email: body.email });
      if (checkExist) {
        return res.status(400).json({ error: "email already in use" });
      }
      const contact = Contact.build(body);
      await contact.save();
      return res.status(201).json(contact);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  contacts: async (req: Request, res: Response) => {
    try {
      const contact = await Contact.find();
      return res.status(200).json(contact);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateContact: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const check = await Contact.findById({ _id: req.params.id });
      if (!check) {
        return res.status(409).json({ error: "Contact not found" });
      }
      const contact = await Contact.findOneAndUpdate(
        { _id: req.params.id },
        body,
        { new: true }
      );
      return res.status(200).json(contact);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteContact: async (req: Request, res: Response) => {
    try {
      const check = await Contact.findById({ _id: req.params.id });
      if (!check) {
        return res.status(409).json({ error: "Contact not found" });
      }
      const contact = await Contact.findOneAndRemove({ _id: req.params.id });
      return res.status(204).json(contact);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
};
