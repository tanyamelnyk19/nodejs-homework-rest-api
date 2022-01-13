import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateId } from '../../middlewares/contacts/validation';

const router = new Router();

router.delete('/:id', validateId, controllers.deleteContact);

export default router;