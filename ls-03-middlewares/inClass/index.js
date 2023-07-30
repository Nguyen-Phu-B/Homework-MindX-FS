import express from "express";
import posts from "./data/post.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello to our server");
});

app.get("/api/v1/posts", (req, res) => {
    res.json({
        data: posts,
    });
});

app.get("/api/v1/posts/:id", (req, res) => {
    // Get the postId
    const postId = req.params.id;

    console.log("Get - postId", postId);

    // Find the post in Database
    const existingPost = posts.find((post) => post.id == postId);

    // Validate the post
    if (!existingPost) {
        return res.json({
            message: "Post not found",
        });
    }

    // Response client returns
    return res.json({
        data: existingPost,
    });
});

app.post("/api/v1/posts", (req, res) => {
    const body = req.body;

    console.log("Post - Body", body);

    const newPost = {
        ...body,
        id: uuidv4(),
    };

    posts.push(newPost);

    return res.json({
        message: "Create new post successfully",
    });
});

// c1
// app.put("/api/v1/posts/:id", (req, res) => {
//     // Get the postId
//     const postId = req.params.id;
//     const body = req.body;

//     console.log("Put - postId", postId);

//     // Find the post in Database
//     const existingPost = posts.find((post) => post.id == postId);

//     // Validate the post
//     if (!existingPost) {
//         return res.json({
//             message: "Post not found",
//         });
//     }

//     // existingPost.name = updatedPostData.name;
//     // existingPost.title = updatedPostData.title;
//     // existingPost.body = updatedPostData.body;

//     Object.assign(existingPost, body);

//     // Response client returns
//     return res.json({
//         data: existingPost,
//     });
// });
// c2
app.put("/api/v1/posts", (req, res) => {
    // Get the postId
    const postId = req.params.id;
    const body = req.body;

    const existingPostIndex = posts.findIndex((post) => post.id == postId);

    // Validate the post
    if (existingPostIndex === -1) {
        return res.json({
            message: "Post not found",
        });
    }

    const updatedPost = {
        ...postId[existingPostIndex],
        ...body,
    };

    postId[existingPostIndex] = updatedPost;

    // Response client returns
    return res.json({
        data: existingPost,
    });
});

app.delete("/api/v1/posts/:id", (req, res) => {
    // Get the postId
    const postId = req.params.id;

    console.log("Del - postId", postId);

    // c1
    // // Find the post in Database
    // const existingPost = posts.find((post) => post.id == postId);

    // // Validate the post
    // if (!existingPost) {
    //     return res.json({
    //         message: "Post not found",
    //     });
    // }

    // const index = posts.indexOf(existingPost);
    // posts.splice(index, 1);

    // Response client returns
    return res.json({
        message: "Delete post successfully",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
