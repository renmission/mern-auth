import express from 'express';
import { getUsersController } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', getUsersController);

export default router;