import { Container } from "inversify";
import { UserController } from "../controllers/user";
import { TYPES } from "../services/types";

const Ioc = new Container();

Ioc.bind<UserController>(TYPES.UserService).to(UserController);

export default Ioc;
