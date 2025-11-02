
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnect from './config/db.config.js';
dotenv.config();
import authRouter from './router/auth.router.js';
const port = process.env.PORT 

if(!port || port === undefined){ 
 console.log('port is undefined')
};

dbConnect(process.env.MONGO_URI);

const app = express();

app.use(cors({
  origin : [process.env.DEV_URI, process.env.PROD_URI ],
   credentials : true
}));

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRouter);



app.listen(port , (err) => {
   if(err) return console.log('error in listen func', err);
   else{
  console.log('app is running on port ', port);
}
})
