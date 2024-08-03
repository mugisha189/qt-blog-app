import React from "react";
import OurNews from "../components/home/OurNews";
import useGet from "../hooks/useGet";
import { Post } from "../utils/types/post";
import CarouselElement from "../components/home/Carousel";

const Home: React.FC = () => {
  const { data: posts, loading: postLoading } = useGet<Post[]>("/post");
  if (postLoading) {
    return (
      <div className="flex items-center w-screen h-screen overflow-hidden justify-center">
        <div className="bg-primary   h-12 w-12 rounded-full animate-pulse"></div>
      </div>
    );
  }
  return (
    <div>
      {posts && (
        <CarouselElement
          slides={posts.map((post) => ({
            id: post.id,
            media: post.image,
            title: post.title,
            body: post.shortDescription,
          }))}
        />
      )}
      <OurNews />
    </div>
  );
};

export default Home;
