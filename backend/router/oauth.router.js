import { Router } from "express";
import passport from "passport";
import { createToken } from "../helpers/createToken.helpers.js";

const router = Router();

router.get('/google', passport.authenticate(
    'google', {
        scope : ['profile', 'email']
    }
));

router.get('/google/callback', passport.authenticate('google', {
    session : false
}), (req, res) => {
    console.log('req user : ', req.user);
    if(!req.user){
        console.log('Authentication Failed req user is undefinded ');
        return res.status(400).json({success : false, msg : 'Authentication Failed'})
    };

    createToken(req?.user?._id, res);
    console.log('generated token : ', req.cookies.token);

    const redirectUrl =  process.env.PROD_URI 
    console.log('redirect url : ', redirectUrl);
    return res.redirect(redirectUrl)
    
});

export default router