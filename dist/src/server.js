"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var ioc_1 = require("./ioc");
var server = new inversify_express_utils_1.InversifyExpressServer(ioc_1.default, null, { rootPath: '/api' });
exports.server = server;
//# sourceMappingURL=server.js.map