import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import useGet from "../../hooks/useGet";
import { Post } from "../../utils/types/post";

const OurPosts: React.FC = () => {
  const { data, loading, error } = useGet<Post[]>("/post");
  const navigate = useNavigate();

  return (
    <div className="py-20 px-[3vw] space-y-8">
      <div className="flex w-full mx-auto max-w-[700px] flex-col gap-y-3">
        <p className="text-primary font-medium text-center">OUR BLOG</p>
        <p className="text-black font-semibold text-xl text-center">
          Latest Blog Post
        </p>
        <p className="text-gray-700 text-sm text-center">
          Exciting Update: We are thrilled to share our latest blog post
          highlighting the recent achievements and developments in the tech
          industry. Our latest entry covers groundbreaking innovations and
          trends shaping the future. Dive in to explore the new insights and
          stories that are making waves in the world of technology!
        </p>
      </div>

      <div className="px-[10vw]">
        {error && (
          <div className="text-red-500">
            <p>Error: {error.message}</p>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        ) : data?.length === 0 ? (
          <div className="py-4 text-center text-gray-600">
            <p>No blog posts available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.map((post, index) => (
              <div
                key={index}
                onClick={() => navigate(`/blogs/${post.id}`)}
                className="shadow rounded-2xl bg-white p-2 text-myText cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <div className="mt-3 space-y-1">
                  <h3 className="font-semibold line-clamp-1">{post.title}</h3>
                  <p className="text-xs line-clamp-2">
                    {post.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full flex justify-center items-center">
        <Link
          to="/posts"
          className="px-6 w-fit lg:translate-y-0 items-center gap-x-4 translate-y-20 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg flex justify-between"
        >
          Read More of Our Posts
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OurPosts;
