import userModal from '../models/user.modal.js';
import Auth_check from '../helpers/auth.helpers.js';
import bcrypt from 'bcrypt';

const Auth_instance = new Auth_check()

export const register = async (req, res) => {
	try{

	const {name, email, pass, mobile}  = req.body;
	console.log('mobile nb length', mobile.length);

	if(!name || !email || !pass || !mobile){
	return res.status(400).json({success : false, 
	msg : 'please enter all required feilds'
	})
	}
  

	// setter methods in authcheck 
	Auth_instance.checkEmail = email;
	Auth_instance.checkPass = pass;
	Auth_instance.checkMobile = mobile

	const existingUser = await userModal.findOne({email});
	
	if(existingUser){
	return res.status(400).json({success : false, msg : 'user already exist, please use login instead'})
		};

	const salt = 10;
	const hashedPass = await bcrypt.hash(
	pass, salt);

	const  newUser = new  userModal({
	  name, 
	  email,
	  pass : hashedPass,
	  mobile
	})
	
	await newUser.save();


	return res.status(200).json({success : true, msg : 'User Registered Successfully'})
	} catch (err){
	 console.log('error in register function', err);
	return res.status(500).json({msg : err.message, success : false})
	}
}

export const Login = async (req, res) => {
	try{
		const {email, pass} = req.body;
		if(!email || !pass){
			return res.status(400).json({success : false, msg : 'Please enter all feilds'})
		}

		Auth_instance.checkEmail = email;
		Auth_instance.checkPass = pass
		
		const user = await userModal.findOne({email});

		if(!user) return res.status(400).json({success : false,  msg : 'User Not Exist'})
		
		const checkPass = await bcrypt.compare(pass, user.pass);

		if(!checkPass) return res.status(400).json({success : false, msg : 'Invalid Credentials'});
		
		const logedUser = await userModal.findOne({email}).select('-pass');
		return res.status(200).json({success : true, msg : 'Successfully Loged In', data:logedUser});
	
	}catch(err) {
	console.log('error in login function', err);
	return res.status(500).json({msg : err.message, success : false})
	}
}
