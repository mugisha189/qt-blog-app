import { postService } from "../services";
import { Request, Response, NextFunction } from "express";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.getPostById(Number(req.params.id));
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.updatePost(Number(req.params.id), req.body);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await postService.deletePost(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
};
