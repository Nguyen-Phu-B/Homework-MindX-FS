import express from "express";
import "dotenv/config";
import cors from "cors";
import routerConfig from "./routes/index.js";
import { connectToDatabase } from "./config/db.config.js";

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(express.json());
app.use(cors("*"));

app.use("/api/v1", routerConfig());

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
