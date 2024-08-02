import Joi from "joi";
export default {
  login: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
  refreshToken: Joi.object({
    token: Joi.string().required(),
  }),
};
