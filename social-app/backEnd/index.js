import "dotenv/config";
import express from "express";
import { connectMongoDB } from "./configs/db.config.js";
import router from "./routes/router.js";
import cors from "cors";

const app = express();
const PORT = 3001;

const whiteList = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed bu CORS"));
        }
    },
};

connectMongoDB();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
