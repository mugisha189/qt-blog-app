import { User } from "./user";

export interface CreatePostData {
  title: string;
  shortDescription: string;
  content: string;
  image: string | null;
  authorId: number;
}

export interface Post extends CreatePostData {
  id: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export interface Comment {
  id: number;
  parentId?: number;
  replies: Comment[];
  authorId: number;
  author: User;
  content: string;
}

export interface CreateComment
  extends Omit<Comment, "id" | "replies" | "author"> {}
