const logAPI = (req, res, next) => {
    const currentTime = new Date();
    console.log(`API is ${currentTime}`);
    next();
};

export default logAPI;
