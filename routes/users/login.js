import { Router } from 'express';
import controllers from '../../controllers/users';

const router = new Router();

router.post('/login', controllers.login);

export default router;