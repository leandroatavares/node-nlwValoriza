import { Router } from 'express';
import { AuthenticateUserControler } from './controllers/AuthenticateUserControler';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserConotroller = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserControler();

router.post('/users', createUserConotroller.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/auth', authenticateUserController.handle)

export { router }
