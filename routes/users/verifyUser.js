import { Router } from 'express';
import controllers from '../../controllers/users';

const router = new Router();

router.get('/verify/:token', controllers.verifyUser);

export default router;