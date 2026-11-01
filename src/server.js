import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("you are at home.");
};

const markerMiddleware = (req, res, next) => {
    console.log(`Someone is going to : ${req.url}`);
    next();
};

app.use(logger);
app.use(markerMiddleware);
app.get("/", handleHome);


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)