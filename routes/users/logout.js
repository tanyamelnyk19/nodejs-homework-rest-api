import { Router } from 'express';
import controllers from '../../controllers/users';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.post('/logout', guard, controllers.logout);

export default router;