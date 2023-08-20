import "dotenv/config.js";
import express from "express";
import { connectToDB } from "./config/db.config.js";

import router from "./routes/index.js";

const app = express();
const PORT = 8080;

connectToDB();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
