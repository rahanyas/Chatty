import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dbConnect from './config/db.config.js';
dotenv.config();

import authRouter from './router/auth.router.js';
import oauthRouter from './router/oauth.router.js';

const port = process.env.PORT 

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { oAuth } from './controllers/oauth.controller.js';

const clientID = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;

const callbackURL = process.env.DEV === 'development' ? process.env.DEV_URI + '/auth/google/callback' : process.env.PROD_URI + '/auth/google/callback'

if(!port || port === undefined){ 
 console.log('port is undefined')
};

dbConnect(process.env.MONGO_URI);

const app = express();

app.use(cors({
  origin : [process.env.DEV_URI, process.env.PROD_URI],
   credentials : true
}));

app.use((cookieParser()))
app.use(express.json());

app.use(passport.initialize());

app.use(morgan('dev'));

passport.use(new GoogleStrategy({
  clientID,
  clientSecret,
  callbackURL : callbackURL
}, oAuth));

app.use('/api/auth', authRouter);
app.use('/auth', oauthRouter)


app.listen(port , (err) => {
   if(err) return console.log('error in listen func', err);
   else{
  console.log('app is running on port ', port);
}
})
