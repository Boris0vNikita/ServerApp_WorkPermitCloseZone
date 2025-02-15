const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res.status(403).json({ message: "Пользователь не авторизован" });
            }
            const decodedData = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
            req.user = decodedData;
        } else {
            console.log("Доступ запрещен");
        }
        next();
    } catch (e) {
        console.log(e);
        return res.status(403).json({ message: "Пользователь не авторизован" });
    }
};
