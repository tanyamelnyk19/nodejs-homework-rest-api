import { Router } from 'express';
import controllers from '../../controllers/users';
import guard from '../../middlewares/users/guard';
import upload from "../../middlewares/users/upload";

const router = new Router();

router.patch('/avatar', guard, upload.single('avatar'), controllers.uploadAvatar);

export default router;