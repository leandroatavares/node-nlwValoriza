import { Router } from 'express';
import { AuthenticateUserControler } from './controllers/AuthenticateUserControler';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsContrroller';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserConotroller = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserControler();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();

router.post('/users', createUserConotroller.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/auth', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/user/compliments/sender', ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get('/user/compliments/receiver', ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle)

export { router }
