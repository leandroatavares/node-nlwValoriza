import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

const createUserConotroller = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserConotroller.handle);
router.post('/tags', createTagController.handle);

export { router }
