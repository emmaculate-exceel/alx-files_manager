import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import UserController from '../controller/UserController.js';
import AuthController from '../controller/AuthController.js';
const router = Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

router.post('/users', UserController.postNew);
router.get('/users/me', UserController.getMe);

router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);

export default router;
