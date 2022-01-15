import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateQuery } from '../../middlewares/contacts/validation';

const router = new Router();

router.get('/', validateQuery, controllers.getContacts);

export default router;

