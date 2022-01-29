import { Router } from 'express';
import controllers from '../../controllers/users';

const router = new Router();

router.post('/verify', controllers.repeatEmailForVerifyUser);

export default router;