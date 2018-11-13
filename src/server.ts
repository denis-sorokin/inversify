import { InversifyExpressServer } from 'inversify-express-utils';
import Ioc from './ioc';

/**
 * Create Inversify Express Server.
 */
const server = new InversifyExpressServer(Ioc, null, { rootPath: '/api' });

export { server };
