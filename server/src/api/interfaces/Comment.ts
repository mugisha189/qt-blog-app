export interface CommentBase {
  content: string;
  authorId: number;
  postId: number;
}

export interface Comment extends CommentBase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewComment
  extends Omit<Comment, "id" | "createdAt" | "updatedAt"> {}
