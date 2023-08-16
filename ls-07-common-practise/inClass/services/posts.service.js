import mongo from "mongodb";
import { db } from "../config/database.js";
const ObjectId = mongo.ObjectId;

const collection = db.collection("posts");

export const getAllPost = async () => {
    try {
        const data = await collection.find().toArray();
        return data;
    } catch (error) {
        console.log("getAllPosts ~ ", error);
    }
};

export const insertPost = async ({ userId, title, body }) => {
    try {
        const data = await collection.insertOne({
            userId,
            title,
            body,
        });
        return data;
    } catch (error) {
        console.log("insertPost ~ ", error);
    }
};

export const getPostById = async (id) => {
    try {
        const data = await collection.findOne({ _id: new ObjectId(id) });
        return data;
    } catch (error) {
        console.log("getPostById ~ ", error);
    }
};
