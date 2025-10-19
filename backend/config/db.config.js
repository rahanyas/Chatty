import mongoose from 'mongoose';

async function dbConnect(uri){
   if(!uri || uri === undefined){
     console.log('given uri is undefined', uri)
  return;
};
 try{
const connect = await mongoose.connect(uri);
console.log('mongodb connected');
}
catch(err){
  console.log('error in dbConnect',err )
}
};

export default dbConnect;
