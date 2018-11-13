import * as expect from 'expect';
import Ioc from '../../ioc';
import { TYPES as ResourcesTypes } from '../../resources/types';
import { UserFsResource } from '../../resources/user/user.fs';
import { UserService } from '../../services/user';

describe('user service tests', () => {
    const userFsResource = Ioc.get<UserFsResource>(ResourcesTypes.UserResource);
    const userService = new UserService(userFsResource);

    it('should get all users', (done) => {
        userService.getAllUsers()
            .then((users) => {
                expect(users).toBeDefined();
                expect(users.length).toBeDefined();
                done();
            });
    });

    it('should get user by id', (done) => {
        userService.getUserById('0')
            .then((user) => {
                expect(user).toBeDefined();
                expect(user.id).toBeDefined();
                expect(user.id).toBe('0');
                done();
            });
    });

    it('should get user by email', (done) => {
        userService.getUserByEmail('bradley.dixon@vitricomp.domain')
            .then((user) => {
                expect(user).toBeDefined();
                expect(user.email).toBeDefined();
                expect(user.email).toBe('bradley.dixon@vitricomp.domain');
                done();
            });
    });
});
