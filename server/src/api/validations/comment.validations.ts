import Joi from "joi";
import { NewComment } from "../interfaces/Comment";

export default {
  newComment: Joi.object<NewComment>({
    content: Joi.string().required(),
    authorId: Joi.number().integer().required(),
    postId: Joi.number().integer().required(),
  }),
  updateComment: Joi.object({
    content: Joi.string().optional(),
  }),
};
