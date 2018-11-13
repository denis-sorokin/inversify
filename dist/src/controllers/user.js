"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("../services/types");
var user_1 = require("../services/user");
var UserController = (function () {
    function UserController(_userService) {
        this._userService = _userService;
    }
    UserController.prototype.getAllUsers = function (req, res, next) {
        return this._userService.getAllUsers()
            .then(function (users) {
            var mappedUsers = users.map(function (user) {
                return {
                    id: user.id,
                    name: user.surname + ' ' + user.name,
                };
            });
            return res.json({
                users: mappedUsers,
            });
        })
            .catch(next);
    };
    UserController.prototype.getUserById = function (req, res, next) {
        return this._userService.getUserById(req.params.id)
            .then(function (user) {
            var userSafeData = {
                id: user.id,
                name: user.surname + ' ' + user.name,
            };
            return res.json({
                user: userSafeData,
            });
        })
            .catch(next);
    };
    UserController.prototype.getUserInfo = function (req, res, next) {
        return this._userService.getUserById(req.params.id)
            .then(function (user) {
            var userSafeData = {
                id: user.id,
                name: user.surname + ' ' + user.name,
                department: user.department,
                email: user.email,
            };
            return res.json({
                user: userSafeData,
            });
        })
            .catch(next);
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getAllUsers", null);
    __decorate([
        inversify_express_utils_1.httpGet('/:id'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getUserById", null);
    __decorate([
        inversify_express_utils_1.httpGet('/:id/info'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getUserInfo", null);
    UserController = __decorate([
        inversify_express_utils_1.controller('/users'),
        __param(0, inversify_1.inject(types_1.TYPES.UserService)),
        __metadata("design:paramtypes", [user_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.js.map