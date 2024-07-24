import express from 'express';
import { getUsersController, updateUserController } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

router.get('/', getUsersController);
router.put('/update/:id', verifyToken, updateUserController)

export default router;