import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateUpdate, validateId } from '../../middlewares/contacts/validation';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.put('/:id', [guard, validateId, validateUpdate], controllers.updateContact);

export default router;