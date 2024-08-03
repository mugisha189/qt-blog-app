import React from "react";
import useGet from "../hooks/useGet";
import { Post } from "../utils/types/post";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import Button from "../components/core/button";
import { useUser } from "../hooks/useUser";

const Blogs: React.FC = () => {
  const { data, loading, error } = useGet<Post[]>("/post");
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="py-20">
      <div className="px-[7vw] space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-xs">
            Home {">"} <span className="text-myText">Posts</span>
          </p>
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
        <div>
          {error && (
            <div className="text-red-500">
              <p>Error: {error.message}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {loading &&
              Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse space-y-2 w-full  shadow rounded-2xl  bg-white p-2 text-myText"
                >
                  <div className="h-56 bg-gray-300 rounded-2xl w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              ))}
            {data?.map((news, index) => (
              <div
                key={index}
                onClick={() => navigate(`/blogs/${news.id}`)}
                className=" shadow rounded-2xl  bg-white p-2 text-myText cursor-pointer "
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <div className="mt-3 space-y-1">
                  <h3 className="font-semibold  line-clamp-1 ">{news.title}</h3>
                  <p className="text-xs line-clamp-2">
                    {news.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
