/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreatePostData } from "../types/post";
import { authorizedApi } from "../api";
import { processHTMLContent } from "./core";

export const createPost = async (postData: CreatePostData) => {
  const content = await processHTMLContent(postData.content);
  const response = await authorizedApi.post("/post", {
    ...postData,
    content: content,
  });
  return response.data;
};
export const updatePost = async (
  id: string,
  postData: Partial<CreatePostData>
) => {
  if (postData.content) {
    const content = await processHTMLContent(postData.content);
    postData.content = content;
  }
  const response = await authorizedApi.put(`post/${id}`, postData);

  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await authorizedApi.delete(`post/${id}`);
  return response.data;
};
