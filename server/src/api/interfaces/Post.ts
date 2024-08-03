import { User } from "./User";

export interface NewPost {
  title: string;
  content: string;
  authorId: number;
  image:string;
  shortDescription: string;
}

export interface Post extends NewPost {
  id: number;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
}
