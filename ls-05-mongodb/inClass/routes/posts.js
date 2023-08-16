import express from "express";

import PostsController from "../controllers/posts.controller.js";

import posts from "../data/post.js";
import { v4 as uuidv4 } from "uuid";

import jwt from "jsonwebtoken";

const router = express.Router();

const postsController = new PostsController();

router.get("/", postsController.getPost);
router.get("/:id", postsController.getPostId);
router.post("/", postsController.insertPost);

// router.get("/", (req, res) => {
//     const token = req.headers["x-access-token"];

//     if (!token) {
//         return res.status(403).json({ message: "Token is not provide" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     } catch (error) {
//         return res.status(403).json({ message: "Invalid token" });
//     }

//     res.json({
//         data: posts,
//     });
// });

// router.get("/:id", (req, res) => {
//     const postId = req.params.id;

//     console.log("Get - postId", postId);

//     const existingPost = posts.find((post) => post.id == postId);

//     if (!existingPost) {
//         return res.json({
//             message: "Post not found",
//         });
//     }

//     return res.json({
//         data: existingPost,
//     });
// });

// router.post("/", (req, res) => {
//     const body = req.body;

//     console.log("Post - Body", body);

//     const newPost = {
//         ...body,
//         id: uuidv4(),
//     };

//     posts.push(newPost);

//     return res.json({
//         message: "Create new post successfully",
//     });
// });

// router.put("/", (req, res) => {
//     const postId = req.params.id;
//     const body = req.body;

//     const existingPostIndex = posts.findIndex((post) => post.id == postId);

//     if (existingPostIndex === -1) {
//         return res.json({
//             message: "Post not found",
//         });
//     }

//     const updatedPost = {
//         ...postId[existingPostIndex],
//         ...body,
//     };

//     postId[existingPostIndex] = updatedPost;

//     return res.json({
//         data: existingPost,
//     });
// });

// router.delete("/:id", (req, res) => {
//     const postId = req.params.id;

//     console.log("Del - postId", postId);

//     const existingPost = posts.find((post) => post.id == postId);

//     if (!existingPost) {
//         return res.json({
//             message: "Post not found",
//         });
//     }

//     const index = posts.indexOf(existingPost);
//     posts.splice(index, 1);

//     return res.json({
//         message: "Delete post successfully",
//     });
// });

export default router;
