import { inject, injectable } from 'inversify';
import { Iuser } from '../interfaces/iuser';
import { TYPES } from '../resources/types';
import { UserFsResource } from '../resources/user/user.fs';

@injectable()
export class UserService {
    constructor(@inject(TYPES.UserResource) private userFsResource: UserFsResource) {
    }

    public getUserById(id: string) {
        return this.userFsResource.getUserById(id)
            .then((user) => {
                return user;
            });
    }

    public getUserByEmail(email: string) {
        return this.userFsResource.getUserByEmail(email)
            .then((user) => {
                return user;
            });
    }

    public getAllUsers() {
        return this.userFsResource.getAllUsers()
            .then((users) => {
                return users;
            });
    }
}
