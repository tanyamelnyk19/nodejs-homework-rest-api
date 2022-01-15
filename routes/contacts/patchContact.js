import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateId, validateUpdateFavorite } from '../../middlewares/contacts/validation';

const router = new Router();

router.patch('/:id/favorite', validateId, validateUpdateFavorite, controllers.updateContact);

export default router;