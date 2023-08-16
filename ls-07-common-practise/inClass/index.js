import "dotenv/config.js";
import express from "express";
import { connectToDatabase } from "./config/db.config.js";

import router from "./routes/index.js";
const app = express();
const PORT = 3001;

// create connetction to barabase
connectToDatabase();

// global middleware
app.use(express.json());

// routing
app.use("/api/v1", router);

// err handing
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
