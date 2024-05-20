require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routers = require("./Routes/index"); // можно не указывать конкретный файл если в данной есть файл index.js (Берет его по умолчанию)

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api", routers);
function startApp() {
    try {
        app.listen(PORT, () => {
            console.log(`server started ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();
