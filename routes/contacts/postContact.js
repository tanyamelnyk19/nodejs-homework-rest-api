import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateCreate } from '../../middlewares/contacts/validation';

const router = new Router();

router.post('/', validateCreate, controllers.addContact);

export default router;