import { Router } from 'express';
import operations from '../../model/operations';
import { validateId } from '../../middlewares/contacts/validation';

const router = new Router();

router.delete('/:id', validateId, async (req, res, next) => {
    const { id } = req.params;
    const contact = await operations.removeContact(id);
    if (contact) {
      return res.status(200).json({"message": "contact deleted"});
    }
    res.status(404).json({ "message": "Not found" })
});

export default router;