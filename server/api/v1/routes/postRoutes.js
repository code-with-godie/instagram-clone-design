import express from 'express';
import { createPost, getAllPosts, getSingleUserAllPosts, toggleLikes, togglebookmarks } from '../controllers/postsController.js';
import authorize from '../../../middlewares/authentication.js';

const Router = express.Router();

Router.route("/").post(authorize,createPost);
Router.route("/").get(authorize,getAllPosts);
Router.route("/like/:id").patch(authorize,toggleLikes);
Router.route("/bookmark/:id").patch(authorize,togglebookmarks);
Router.route("/:id").get(authorize,getSingleUserAllPosts);

export default Router