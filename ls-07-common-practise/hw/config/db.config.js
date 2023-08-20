import mongoose from "mongoose";

const MONGO_URL = process.env.PATH_MN_DB;

export const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URL);
        console.log(`Database connection at ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
