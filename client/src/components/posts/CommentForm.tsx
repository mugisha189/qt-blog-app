/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import InputField from "../core/input";
import Button from "../core/button";
import { useUser } from "../../hooks/useUser";
import { createComment } from "../../utils/funcs/comments";

interface CommentFormProps {
  postId: number;
  onSubmitSuccess: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  postId,
  onSubmitSuccess,
}) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!content) newErrors.content = "Content is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!validate()) return;

    try {
      await createComment({
        postId: parseInt(postId.toString()),
        authorId: parseInt(user?.id as any),
        content,
      });
      setContent("");
      setErrors({});
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="textarea"
        label="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        error={errors.content}
        placeholder="Your comment"
      />
      <div className="flex justify-end gap-2 items-center">
        <Button
          variant="primary"
          type="submit"
          className="text-sm"
          loading={loading}
        >
          Comment
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
