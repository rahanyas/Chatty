import express from 'express';
import {
    checkAuth,
    Login, 
    logout, 
    register
} from "../controllers/auth.controller.js"


const router = express.Router();

router.post('/register', register);
router.post('/login', Login);
router.get('/checkAuth', checkAuth);
router.post('/logout', logout)

export default router;
  