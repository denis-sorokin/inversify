"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./src/ioc/loader");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");
var express = require("express");
var Debug = require("debug");
var morgan = require("morgan");
var server_1 = require("./src/server");
var config_1 = require("./src/config");
var debug = Debug('app:server');
server_1.server.setConfig(function (_app) {
    _app.use(morgan('dev'));
    _app.set('port', config_1.config.PORT);
    _app.use(express.urlencoded({ extended: false, limit: '10mb' }));
    _app.use(bodyParser());
    _app.use(express.static(path.join(__dirname, 'public')));
});
var app = server_1.server.build();
var logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));
var port = app.get('port');
var env = app.get('env');
app.listen(port, function () {
    debug("App is running at http://localhost:" + port + " in " + env + " mode");
    debug('Press Ctrl + C for stop.');
});
//# sourceMappingURL=index.js.map