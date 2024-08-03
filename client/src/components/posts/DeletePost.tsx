/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { DeleteIcon } from "../core/icons";
import Button from "../core/button";
import { deletePost } from "../../utils/funcs/post";
import { useModal } from "../../hooks/useModal";
import { Post } from "../../utils/types/post";

const DeletePost: React.FC<{ post: Post; onClose: () => void }> = ({
  post,
  onClose,
}) => {
  const { closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle deletion of the post
  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await deletePost(post.id as any);
      closeModal();
      onClose();
    } catch (error) {
      console.error("Error deleting post:", error);
      setError("An error occurred while deleting the post. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
      <div className="text-red-700">
        <DeleteIcon height="h-16" width="w-16" />
      </div>
      <p className="text-xl text-center text-gray-700 font-semibold mt-4">
        Are you sure?
      </p>
      <p className="text-sm text-center text-gray-500 mt-2">
        Deleting this post will remove it permanently from the system. All
        associated data and references to this post will also be deleted. Please
        ensure that you want to proceed with this action.
      </p>
      {error && (
        <div className="text-red-600 text-sm text-center mt-4">{error}</div>
      )}
      <div className="flex items-center gap-2 mt-6">
        <Button variant="secondary" className="text-sm" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="primary"
          className="text-sm"
          loading={loading}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeletePost;
