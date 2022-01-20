import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateCreate } from '../../middlewares/contacts/validation';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.post('/', [guard, validateCreate], controllers.addContact);

export default router;