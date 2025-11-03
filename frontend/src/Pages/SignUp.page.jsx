import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, updateFeild, resetField } from '../features/user/userSlice.js' 
import { useState } from 'react'
import '../styles/page/signup.style.scss'
import { useEffect } from 'react'

const Signup = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate()
    
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if(user.isLogedIn === true){
            dispatch(resetField())
            navigate('/home')
        }
    },[user.isLogedIn])

    const handleChange = (e) => {
        setErrorMsg('')
        const {name, value} = e.target
        dispatch(updateFeild({field : name, value}))
    }

    const userData = {
        name : user.name,
        mobile : user.mobile,
        email : user.email,
        pass : user.pass
    }

    const handleSubmit = () => {
         const {name, mobile, pass, email} = userData;

         if(!name || !email || !pass || !mobile){
            setErrorMsg('enter all valid Feild')
            dispatch(resetField())
            return
         }
         if(mobile.length !== 10){
            setErrorMsg('please enter a valid mobile number');
            dispatch(resetField())
            return;
         }
         if(pass.length < 3){
            setErrorMsg('pass must be atleast 3 characters');
            dispatch(resetField())
            return; 
         }

       dispatch(register(userData))       
         
    }
    return(
        <div className="container">
                {/* error displaying layout */}
            {(errorMsg.length > 0 || user.msg.length > 0) && (
                <div className='err-container'>
                        <h1 className={user.status === 'success' ? 'success-msg' : 'err-msg'}>{errorMsg || user.msg}</h1>
                </div>
            )}
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="name" value={user.name}  placeholder="Username" onChange={handleChange} required/>

               <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} required/>

               <input type="number" name="mobile" value={user.mobile} placeholder="Mobile"  onChange={handleChange} required/>

               <input type="password" name="pass" value={user.pass} placeholder="password"  onChange={handleChange} required/>

               <input type="password" name="confirmPas" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required/>

               <button type="button" onClick={() => handleSubmit()}>singup</button>
            </div>

                <span style={{textDecoration:'none'}}>already have an account? <Link to='/login' className='login-link'>login</Link></span> 
                
                <span>or</span>
            {/* this for oauth container */}
            
            <button className='oauth-btn'>login with google</button>
          
        </div>
    )
}


export default Signup