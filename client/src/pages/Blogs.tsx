import React from "react";
import useGet from "../hooks/useGet";
import { Post } from "../utils/types/post";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import Button from "../components/core/button";
import { useUser } from "../hooks/useUser";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import DeletePost from "../components/posts/DeletePost";
import { useModal } from "../hooks/useModal";

const Blogs: React.FC = () => {
  const { data, loading, error, refetch } = useGet<Post[]>("/post");
  const navigate = useNavigate();
  const { user } = useUser();
  const { openModal } = useModal();

  // Filter posts into My Blogs and Others
  const myBlogs = data?.filter((post) => user?.id === post.authorId) || [];
  const otherBlogs = data?.filter((post) => user?.id !== post.authorId) || [];

  return (
    <div className="py-24">
      <div className="px-[7vw] space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl text-primary">Posts</p>
          {user && (user.role === "Author" || user.role === "Admin") && (
            <Button
              onClick={() => navigate("/blogs/create")}
              variant="primary"
              className="flex items-center gap-2"
            >
              <IoMdAddCircle /> <p className="text-sm">Add Post</p>
            </Button>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse space-y-2 w-full shadow rounded-2xl bg-white p-2 text-myText"
              >
                <div className="h-56 bg-gray-300 rounded-2xl w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-red-500">
            <p>Error: {error.message}</p>
          </div>
        )}

        {data && data.length === 0 && (
          <div className="py-4 text-center text-gray-600">
            <p>No blogs available.</p>
          </div>
        )}

        {data && data.length > 0 && (
          <>
            {user && (
              <>
                <h2 className="text-xl font-semibold text-primary mt-8">
                  My Blogs
                </h2>
                {myBlogs.length === 0 ? (
                  <div className="py-4 text-center text-gray-600">
                    <p>You have not written any blogs yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {myBlogs.map((post, index) => (
                      <div
                        key={index}
                        className="shadow rounded-2xl bg-white p-2 text-myText cursor-pointer"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover rounded-2xl"
                        />
                        <div className="mt-3 space-y-1">
                          <h3 className="font-semibold line-clamp-1">
                            {post.title}
                          </h3>
                          <p className="text-xs line-clamp-2">
                            {post.shortDescription}
                          </p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <Link
                            to={`/blogs/${post.id}`}
                            className="text-blue-500 p-2 border border-blue-500 rounded-2xl bg-blue-50"
                          >
                            <AiFillEye />
                          </Link>
                          <Link
                            to={`/blogs/edit/${post.id}`}
                            className="text-green-500 p-2 border border-green-500 rounded-2xl bg-green-50"
                          >
                            <AiFillEdit />
                          </Link>
                          <button
                            className="text-red-500 p-2 border border-red-500 rounded-2xl bg-red-50"
                            onClick={() =>
                              openModal(
                                <DeletePost
                                  post={post}
                                  onClose={() => refetch()}
                                />
                              )
                            }
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            <h2 className="text-xl font-semibold text-primary mt-8">
              Others' Blogs
            </h2>
            {otherBlogs.length === 0 ? (
              <div className="py-4 text-center text-gray-600">
                <p>No blogs from others.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {otherBlogs.map((post, index) => (
                  <div
                    key={index}
                    className="shadow rounded-2xl bg-white p-2 text-myText cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover rounded-2xl"
                    />
                    <div className="mt-3 space-y-1">
                      <h3 className="font-semibold line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-xs line-clamp-2">
                        {post.shortDescription}
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <Link
                        to={`/blogs/${post.id}`}
                        className="text-blue-500 p-2 border border-blue-500 rounded-2xl bg-blue-50"
                      >
                        <AiFillEye />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
