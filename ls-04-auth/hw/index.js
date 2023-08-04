import express from "express";
import "dotenv/config";
import cors from "cors";

import router from "./routes/index.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors("*"));
app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
