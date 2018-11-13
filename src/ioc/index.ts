import { Container } from "inversify";
import { UserService } from "../services/user";
import { UserFsResource } from "../resources/user/user.fs"

import { TYPES as ServicesTypes } from "../services/types";
import { TYPES as ResourcesTypes } from "../resources/types";

const Ioc = new Container();

Ioc.bind<UserService>(ServicesTypes.UserService).to(UserService);
Ioc.bind<UserFsResource>(ResourcesTypes.UserResource).to(UserFsResource);

export default Ioc;
