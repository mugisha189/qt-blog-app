import useGet from "../../hooks/useGet";
import { useUser } from "../../hooks/useUser";
import { Comment } from "../../utils/types/post";
import Title from "../core/title";
import AComment from "./AComment";
import CommentForm from "./CommentForm";

interface CommentSectionProps {
  postId: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const {
    data: comments,
    loading,
    error,
    refetch,
  } = useGet<Comment[]>(`/comment/post/${postId}`);
  const { user } = useUser();

  return (
    <div className="space-y-4 my-5 w-full">
      <Title text="Comments" />
      {user ? (
        <CommentForm
          postId={postId}
          onSubmitSuccess={() => {
            refetch();
          }}
        />
      ) : (
        <div>To Comment Please Login</div>
      )}
      <div className="mt-4 space-y-4">
        {loading && <p>Loading comments...</p>}
        {error && <p>Error loading comments: {error.message}</p>}
        {!comments || comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => <AComment key={comment.id} {...comment} />)
        )}
      </div>
    </div>
  );
};

export default CommentSection;
