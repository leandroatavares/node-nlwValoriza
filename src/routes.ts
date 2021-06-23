import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

const createUserConotroller = new CreateUserController()

router.post('/users', createUserConotroller.handle)

export { router }
