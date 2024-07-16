import express from 'express';
import { signInController, signUpController } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signin', signInController);
router.post('/signup', signUpController);

export default router;