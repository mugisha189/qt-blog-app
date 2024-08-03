import React from "react";
import { Comment } from "../../utils/types/post";

const AComment: React.FC<Comment> = ({ content, author: commenter }) => {
  return (
    <div className=" bg-gray-100 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold ">{commenter?.name}</p>
          <span className="text-xs text-gray-500">{commenter?.email}</span>
        </div>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default AComment;
