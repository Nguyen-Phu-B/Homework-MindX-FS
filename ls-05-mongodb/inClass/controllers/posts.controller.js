import { getAllPost, getPostById, insertPost } from "../services/posts.service.js";

class PostsController {
    // Get /post
    async getPost(req, res) {
        try {
            const data = await getAllPost();
            if (data) {
                return res.status(200).json({
                    data: data,
                });
            }
            res.status(400).json({
                message: "Post not found",
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: "Something wrong !!!" });
        }
    }

    // Get /post/:id
    async getPostId(req, res) {
        const postId = req.params.id;
        console.log("paramId ~ ", postId);

        try {
            if (postId) {
                const data = await getPostById(postId);
                if (data) {
                    return res.status(200).json({ data: data });
                }

                res.status(400).json({
                    message: "Post not found!",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: "id Missing" });
        }
    }

    // Post /post
    async insertPost(req, res) {
        try {
            const { userId, title, body } = req.body;

            if (userId && title && body) {
                const inserted = await insertPost({ userId, title, body });
                if (inserted) {
                    return res.status(200).json({ message: "new post is created" });
                }
                return res.status(404).json({ message: "can not create new post" });
            }
            res.status(400).json({ message: "userId, title, body missing" });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "something wrong !!!",
            });
        }
    }
}

export default PostsController;
