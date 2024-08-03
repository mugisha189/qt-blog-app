import { toast } from "react-toastify";
import { authorizedApi } from "../api";

export const createComment = async ({
  postId,
  authorId,
  content,
}: {
  postId: number;
  authorId: number;
  content: string;
}) => {
  try {
    const response = await authorizedApi.post(`/comment/`, {
      postId,
      authorId,
      content,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Error creating comment");
    throw error;
  }
};
