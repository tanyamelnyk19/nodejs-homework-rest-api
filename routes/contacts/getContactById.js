import { Router } from 'express';
import controllers from '../../controllers/contacts';
import { validateId } from '../../middlewares/contacts/validation';

const router = new Router();

router.get('/:id', validateId, controllers.getContactById);

export default router;