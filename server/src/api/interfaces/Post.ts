import { User } from "./User";

export interface NewPost {
  title: string;
  content: string;
  authorId: number;
}

export interface Post extends NewPost {
  id: number;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
}
