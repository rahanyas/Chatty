import express from 'express';
import {
    checkAuth,
    Login, 
    register
} from "../controllers/auth.controller.js"

import { verifyToken } from '../helpers/authMiddleware.helper.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', Login);
router.get('/checkAuth', checkAuth)

export default router;
