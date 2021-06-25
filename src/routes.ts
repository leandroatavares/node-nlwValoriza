import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserConotroller = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserConotroller.handle);
router.post('/tags', ensureAdmin, createTagController.handle);


export { router }
