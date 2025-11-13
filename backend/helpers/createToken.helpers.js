import jwt from 'jsonwebtoken';

const isProduction = process.env.NODE_ENV === 'production';

export const createToken = (userId, res) => {
 try{
   console.log(userId);
   if(!userId){
     return console.log('user id is not definded');
   }

   //create jwt token
   const token = jwt.sign({id:userId}, process.env.JWT_SECRET,
    {expiresIn : '2d'});

    console.log('token created ', token);

    res.cookie('token', token, {
	httpOnly  : true, // it will block accessing cookie from client without this anybody can access document.cookie()
	secure : true,
	sameSite : 'None',
	maxAge : 2 * 24 * 60  * 60 * 1000,
    });

    console.log('token set in cookies : ', token);
    return token;
    
 }catch(err){
	console.log('error in createToken : ', err);
	return res.status(400).json({sucesss:false,msg:'Token Generation Failed'})
 }
}
