import { Post } from "../interfaces/Post";
import Joi from "joi";


export default {
  newPost: Joi.object<Post>({
    title: Joi.string().max(256).required(),
    content: Joi.string().required(),
    authorId: Joi.number().integer().required(),
  }),
  updatePost: Joi.object<Partial<Post>>({
    title: Joi.string().max(256).optional(),
    content: Joi.string().optional(),
    authorId: Joi.number().integer().optional(),
  }),
};
