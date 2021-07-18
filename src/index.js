import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { todoRt } from "./routes/todoRt.js";
import { dbase } from "./config/database.js";

(async () => {
    dbase.authenticate()
    .then(() => console.groupCollapsed("Database Connected!"))
    .catch((error) => console.log("Error: " + error));
    const app = express();
    app.use(helmet());

    // CORS Setup.
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({"status message": "OK"});
        };
        next();
    });

    app.use(logger("dev"));
    app.use("/api", todoRt);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();





