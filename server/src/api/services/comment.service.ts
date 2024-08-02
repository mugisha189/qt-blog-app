import Comment from "../models/Comment";
import { NewComment } from "../interfaces/Comment";
import APIError from "../helpers/APIError";
import status from "http-status";

const createComment = async (body: NewComment) => {
  const newComment = await Comment.create(body);
  return newComment;
};

const getCommentById = async (id: number) => {
  return Comment.findByPk(id, {
    include: ["author", "post"],
  });
};

const getCommentsByPostId = async (postId: number) => {
  return Comment.findAll({
    where: { postId },
    include: ["author"],
  });
};

const updateComment = async (id: number, updateData: Partial<NewComment>) => {
  await Comment.update(updateData, { where: { id } });
  return Comment.findByPk(id);
};

const deleteComment = async (id: number) => {
  const comment = await Comment.findByPk(id);
  if (!comment) {
    throw new APIError(status.NOT_FOUND, "Comment not found");
  }
  await comment.destroy();
};

export default {
  createComment,
  getCommentById,
  getCommentsByPostId,
  updateComment,
  deleteComment,
};
