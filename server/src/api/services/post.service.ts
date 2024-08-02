import { Post } from "../models";
import { NewPost } from "../interfaces/Post";
import APIError from "../helpers/APIError";
import status from "http-status";

const createPost = async (body: any) => {
  const newPost = await Post.create(body);
  return newPost;
};

const getPostById = (id: number) => {
  return Post.findByPk(id, { include: ["author"] });
};

const getAllPosts = async () => {
  return Post.findAll({ include: ["author"] });
};

const updatePost = async (id: number, updateData: Partial<NewPost>) => {
  await Post.update(updateData, { where: { id } });
  return Post.findByPk(id, { include: ["author"] });
};

const deletePost = async (id: number) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new APIError(status.NOT_FOUND, "Post not found");
  }
  await post.destroy();
};

export default {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
};
