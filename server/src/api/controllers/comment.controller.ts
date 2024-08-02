import { Request, Response, NextFunction } from "express";
import { commentService } from "../services";

const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newComment = await commentService.createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

const getCommentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await commentService.getCommentById(Number(req.params.id));
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

const getCommentsByPostId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await commentService.getCommentsByPostId(
      Number(req.params.postId)
    );
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedComment = await commentService.updateComment(
      Number(req.params.id),
      req.body
    );
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await commentService.deleteComment(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  createComment,
  getCommentById,
  getCommentsByPostId,
  updateComment,
  deleteComment,
};
