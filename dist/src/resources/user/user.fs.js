"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inversify_1 = require("inversify");
var config_1 = require("../../config");
var UserFsResource = (function () {
    function UserFsResource() {
        this.path = config_1.config.FS_DATA_USERS_PATH;
    }
    UserFsResource.prototype.getUserById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = fs.readFileSync(_this.path, 'utf8');
            var users = JSON.parse(data);
            var user = users.find(function (u) { return u.id === id; });
            resolve(user);
        });
    };
    UserFsResource.prototype.getUserByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = fs.readFileSync(_this.path, 'utf8');
            var users = JSON.parse(data);
            var user = users.find(function (u) { return u.email === email; });
            resolve(user);
        });
    };
    UserFsResource.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = fs.readFileSync(_this.path, 'utf8');
            var users = JSON.parse(data);
            resolve(users || []);
        });
    };
    UserFsResource = __decorate([
        inversify_1.injectable()
    ], UserFsResource);
    return UserFsResource;
}());
exports.UserFsResource = UserFsResource;
//# sourceMappingURL=user.fs.js.map