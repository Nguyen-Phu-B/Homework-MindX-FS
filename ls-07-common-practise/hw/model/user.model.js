import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        requied: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
