import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .optional(),
  age: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
});

const validate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res.status(400).json({ msg: error.details[0].message });
      }
      return res.status(400).json({ msg: error.message });
    }
    return next();
  } catch (error: any) {
    if (error.details && error.details.length && error.details[0].message) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    return res.status(400).json({ msg: error.message });
  }
};

export default validate;
