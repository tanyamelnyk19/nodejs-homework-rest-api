import { Router } from 'express';
import controllers from '../../controllers/users';
import limiter from '../../middlewares/users/rate-limit';

const router = new Router();

router.post('/registration', limiter(15 * 60 * 1000, 2), controllers.registration);

export default router;