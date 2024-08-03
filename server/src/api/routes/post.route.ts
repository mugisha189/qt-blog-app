import express from "express";
import { postController } from "../controllers";
import validator from "../middlewares/validator";
import { idValidation, postValidations } from "../validations";
import accessControl from "../middlewares/accessControl";

const router = express.Router();

// Create Post
router.post(
  "/",
  validator.body(postValidations.newPost),
  postController.createPost
);

// Read Post by ID
router.get(
  "/:id",
  validator.params({ id: idValidation }),
  postController.getPostById
);

// Read All Posts
router.get("/", postController.getAllPosts);

// Update Post by ID
router.put(
  "/:id",
  accessControl("ALL"),
  validator.params({ id: idValidation }),
  validator.body(postValidations.updatePost),
  postController.updatePost
);

// Delete Post by ID
router.delete(
  "/:id",
  accessControl(["ADMIN"]),
  validator.params({ id: idValidation }),
  postController.deletePost
);

export default router;
