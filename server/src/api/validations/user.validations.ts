import Joi from "joi";
import { NewUser } from "../interfaces/User";

export default {
  newUser: Joi.object<NewUser>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    photo: Joi.string().optional(),
    password: Joi.string().min(8).max(25).optional(),
  }),
  updateUser: Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    photo: Joi.string().optional(),
    password: Joi.string().min(8).max(25).optional(),
  }),
};
