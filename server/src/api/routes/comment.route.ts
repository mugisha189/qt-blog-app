import express from "express";
import { commentController } from "../controllers";
import validator from "../middlewares/validator";
import { idValidation, commentValidation } from "../validations";
import accessControl from "../middlewares/accessControl";

const router = express.Router();

// Create Comment
router.post(
  "/",
  validator.body(commentValidation.newComment),
  commentController.createComment
);

// Read Comment by ID
router.get(
  "/:id",
  accessControl("ALL"),
  validator.params({ id: idValidation }),
  commentController.getCommentById
);

// Read All Comments for a Post
router.get(
  "/post/:postId",
  accessControl("ALL"),
  validator.params({ postId: idValidation }),
  commentController.getCommentsByPostId
);

// Update Comment by ID
router.put(
  "/:id",
  accessControl("ALL"),
  validator.params({ id: idValidation }),
  validator.body(commentValidation.updateComment),
  commentController.updateComment
);

// Delete Comment by ID
router.delete(
  "/:id",
  accessControl(["ADMIN"]),
  validator.params({ id: idValidation }),
  commentController.deleteComment
);

export default router;
