import express from "express";
import studentsRouter from "./students.js";
import teachersRouter from "./teachers.js";
import subjectsRouter from "./subjects.js";
import systemStatistic from "./statis.js";

import logReq from "../middlewares/logReq.js";
import validQuery from "../middlewares/validQuery.js";
import countStatistic from "../middlewares/countStatistic.js";

const router = express.Router();

router.use("/system/statistic", systemStatistic);

router.use(logReq);
router.use(validQuery);

router.use("/students", countStatistic("student"), studentsRouter);
router.use("/teachers", countStatistic("teacher"), teachersRouter);
router.use("/subjects", countStatistic("subject"), subjectsRouter);

export default router;
