export interface CreatePostData {
  title: string;
  shortDescription: string;
  content: string;
  image: string | null;
  authorId: number;
}

export interface Post extends CreatePostData {
  id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export interface Comment {
  id: number;
  userId: number;
  content: string;
}

export interface CreateComment extends Omit<Comment, "id"> {}
