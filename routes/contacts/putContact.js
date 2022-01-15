import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateUpdate, validateId } from '../../middlewares/contacts/validation';

const router = new Router();

router.put('/:id', validateId, validateUpdate, controllers.updateContact);

export default router;