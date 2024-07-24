import express from 'express';
import { signInController, signInWithGoogle, signOutController, signUpController } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signin', signInController);
router.post('/signup', signUpController);
router.post('/google', signInWithGoogle);
router.get('/signout', signOutController);


export default router;