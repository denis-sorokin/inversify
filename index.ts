import "reflect-metadata"
import "./src/ioc/loader"

import * as path from "path";
import * as fs from "fs";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as Debug from "debug";
import * as morgan from "morgan";
import { server } from "./src/server";
import { config } from "./src/config";

const debug = Debug("app:server");
debug.enabled = true;
debug('HELLO');
console.log(process.env.PORT);
console.log(process.env.DEBUG);
// config server
server.setConfig(_app => {
    _app.use(morgan("dev"));
    _app.set("port", config.PORT);
    _app.use(express.urlencoded({ extended: false, limit: "10mb" }));
    _app.use(bodyParser());
    _app.use(express.static(path.join(__dirname, "public")));
});

// init app
const app = server.build();

// connect morgan logger
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: logStream }));

const port = config.PORT;
const env = app.get("env");

app.listen(port, () => {
    debug(`App is running at http://localhost:${port} in ${env} mode`);
    debug("Press Ctrl + C for stop.");
});

export { app };
