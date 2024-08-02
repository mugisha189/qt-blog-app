import express, { Router } from "express";
import userRouter from "./user.route";
import postRouter from "./post.route";
import commentRouter from "./comment.route";
import authRouter from "./auth.route";
import docsRouter from "./docs.route";
import dashboardRouter from "./dashboard.route";

const router = express.Router();

const routes: {
  path: string;
  route: Router;
}[] = [
  { path: "/users", route: userRouter },
  { path: "/post", route: postRouter },
  { path: "/comment", route: commentRouter },
  { path: "/auth", route: authRouter },
  { path: "/dashboard", route: dashboardRouter },
];

const devRoutes = [
  {
    path: "/docs",
    route: docsRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
