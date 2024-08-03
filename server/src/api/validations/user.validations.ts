import Joi from "joi";
import { NewUser } from "../interfaces/User";

export default {
  newUser: Joi.object<NewUser>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).optional(),
  }),
  updateUser: Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(8).max(25).optional(),
    role: Joi.string().valid("Admin", "User", "Author").optional(),
  }),
};
