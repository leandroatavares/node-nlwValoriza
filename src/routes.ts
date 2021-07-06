import { Router } from 'express';
import { AuthenticateUserControler } from './controllers/AuthenticateUserControler';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserConotroller = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserControler();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserConotroller.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/auth', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)

export { router }
