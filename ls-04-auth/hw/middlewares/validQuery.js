import dataUsers from "../utils/dataUsers.js";

const validQuery = (req, res, next) => {
    if (!req.query.api_key) {
        return res.status(400).json({ error: "missing api_key" });
    }

    const dataFind = dataUsers.find((user) => {
        return user.apiKey === req.query.api_key;
    });

    if (!dataFind) {
        return res.status(400).json({ error: "Unauthorized" });
    }

    next();
};

export default validQuery;
