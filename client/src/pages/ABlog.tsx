"use client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import { Post } from "../utils/types/post";
import CommentSection from "../components/posts/CommentsSection";
import Title from "../components/core/title";

const ABlog: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string; type: string }>();

  const {
    data: postData,
    loading: postLoading,
    error: postError,
  } = useGet<Post>(`/post/${id}`);
  const {
    data: topPostsData,
    loading: topPostsLoading,
    error: topPostsError,
  } = useGet<Post[]>(`/post/`);

  return (
    <div className="pt-20 px-5">
      <div className="py-4 flex space-x-4  text-myText text-sm">
        <div className="w-3/4 space-y-4">
          {postLoading && (
            <div className="space-y-4">
              <div className="animate-pulse space-y-2 w-full  shadow rounded-2xl  bg-white p-2 text-myText">
                <div className="h-56 bg-gray-300 rounded-2xl w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          )}
          {postError && (
            <div className="text-red-500">
              <p>Error: {postError.message}</p>
            </div>
          )}
          {postData && (
            <div className="w-full flex flex-col items-center">
              <div className="p-5 bg-gray-100 rounded-2xl">
                <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
                {postData.image && (
                  <img
                    src={postData.image}
                    alt={postData.title}
                    className="rounded-2xl mb-4 bg-white"
                    width={1000}
                    height={1000}
                  />
                )}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 justify-center">
                    <p>
                      Created at:{" "}
                      {new Date(postData.createdAt).toLocaleDateString()}
                    </p>
                    <p>Comments: {postData.comments?.length}</p>
                  </div>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: postData.content }}
                className="mt-4 prose w-full "
              ></div>
              <CommentSection postId={postData.id} />
            </div>
          )}
        </div>
        <div className="w-1/4 space-y-4">
          <div className="p-4 bg-gray-100 rounded-2xl space-y-3">
            <Title text={`Other Popular Posts`} />
            {topPostsLoading && (
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse space-y-2 w-full  shadow rounded-2xl  bg-white p-2 text-myText flex items-start gap-2"
                  >
                    <div className="h-16 bg-gray-300 rounded-2xl w-16"></div>
                    <div className="flex-grow space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {topPostsError && (
              <div className="text-red-500">
                <p>Error: {topPostsError.message}</p>
              </div>
            )}
            {topPostsData && (
              <div className="space-y-2">
                {topPostsData
                  .filter((post) => post.id === postData?.id)
                  .map((post) => (
                    <div
                      key={post.id}
                      onClick={() => navigate(`/news/${post.id}`)}
                      className=" shadow rounded-2xl  bg-white p-2 text-myText  flex gap-2"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-2xl"
                        width={1000}
                        height={1000}
                      />
                      <div className="space-y-1">
                        <h3 className="font-semibold  line-clamp-1 ">
                          {post.title}
                        </h3>
                        <p className="text-xs line-clamp-2">
                          {post.shortDescription}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABlog;
