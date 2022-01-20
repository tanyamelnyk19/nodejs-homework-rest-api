import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateQuery } from '../../middlewares/contacts/validation';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.get('/', [guard, validateQuery], controllers.getContacts);

export default router;

