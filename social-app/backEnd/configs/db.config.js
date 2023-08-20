import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectMongoDB = async () => {
    try {
        console.log("🚀 ~ file: db.config.js:4 ~ MONGO_URI:", MONGO_URI);
        const connection = await mongoose.connect(MONGO_URI);
        console.log("🚀 ~ file: db.config.js:8 ~ connectMongoDB ~ connection:", connection.connection.host);
    } catch (error) {
        console.log("🚀 ~ file: db.config.js:10 ~ connectMongoDB ~ error:", error);
        process.exit(1);
    }
};
