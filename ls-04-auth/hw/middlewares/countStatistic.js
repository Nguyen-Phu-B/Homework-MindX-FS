import dataStatis from "../utils/dataState.js";
import dataUsers from "../utils/dataUsers.js";

const countStatistic = (resource) => (req, res, next) => {
    const apiKey = req.query.api_key;
    const currentUser = dataUsers.find((user) => user.apiKey === apiKey);

    console.log(currentUser);

    const currentRequestStatisticIndex = dataStatis.findIndex((stat) => stat.user === currentUser.username);

    const currentRequestStatistic =
        currentRequestStatisticIndex === -1 ? null : dataStatis[currentRequestStatisticIndex];

    if (currentRequestStatistic) {
        dataStatis[currentRequestStatisticIndex] = {
            ...currentRequestStatistic,
            [resource]: currentRequestStatistic[resource] + 1,
        };
    } else {
        dataStatis.push({
            user: currentUser.username,
            student: 0,
            teacher: 0,
            subject: 0,
            [resource]: 1,
        });
    }

    next();
};

export default countStatistic;
