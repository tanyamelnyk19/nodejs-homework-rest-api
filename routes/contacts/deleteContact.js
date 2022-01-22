import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateId } from '../../middlewares/contacts/validation';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.delete('/:id', [guard, validateId], controllers.deleteContact);

export default router;