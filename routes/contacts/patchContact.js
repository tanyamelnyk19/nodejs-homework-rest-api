import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateId, validateUpdateFavorite } from '../../middlewares/contacts/validation';
import guard from '../../middlewares/users/guard';

const router = new Router();

router.patch('/:id/favorite', [guard, validateId, validateUpdateFavorite], controllers.updateContact);

export default router;