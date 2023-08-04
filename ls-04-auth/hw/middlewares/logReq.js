const logReq = (req, res, next) => {
    const currentDate = new Date().toISOString();
    const { method, originalUrl, body, query, params } = req;

    console.log({
        date: currentDate,
        method,
        originalUrl,
        body,
        query,
        params,
    });

    // console.log(currentDate, req.method, req.url);
    next();
};

export default logReq;
