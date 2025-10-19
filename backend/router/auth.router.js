import express from 'express';
import {
    Login, 
    register
} from "../controllers/auth.controller.js"

const router = express.Router();

router.get('/register', register);
router.get('/login', Login)

export default router;
