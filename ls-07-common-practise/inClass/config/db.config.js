import mongoose from "mongoose";

const MONGO_URI = "mongodb://0.0.0.0:27017/web70";

export const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log(`Database connection at ${connection.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
