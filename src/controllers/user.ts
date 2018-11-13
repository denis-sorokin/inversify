import { NextFunction, Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { TYPES } from "../services/types";
import { UserService } from "../services/user";

@controller("/users")
export class UserController {
    constructor(@inject(TYPES.UserService) private _userService: UserService) {
    }

    @httpGet("/")
    public getAllUsers(req: Request, res: Response, next: NextFunction) {
        return this._userService.getAllUsers()
            .then((users) => {
                const mappedUsers = users.map((user) => {
                    return {
                        id: user.id,
                        name: user.surname + " " + user.name,
                    };
                });
                return res.json({
                    users: mappedUsers,
                });
            })
            .catch(next);
    }

    @httpGet("/:id")
    public getUserById(req: Request, res: Response, next: NextFunction) {
        return this._userService.getUserById(req.params.id)
            .then((user) => {
                const userSafeData = {
                    id: user.id,
                    name: user.surname + " " + user.name,
                };
                return res.json({
                    user: userSafeData,
                });
            })
            .catch(next);
    }

    @httpGet("/:id/info")
    public getUserInfo(req: Request, res: Response, next: NextFunction) {
        return this._userService.getUserById(req.params.id)
            .then((user) => {
                const userSafeData = {
                    id: user.id,
                    name: user.surname + " " + user.name,
                    department: user.department,
                    email: user.email,
                };
                return res.json({
                    user: userSafeData,
                });
            })
            .catch(next);
    }
}
