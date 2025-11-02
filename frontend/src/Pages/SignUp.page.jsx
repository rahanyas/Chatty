import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, updateFeild } from '../features/user/userSlice.js' 
import { useState } from 'react'
import '../styles/page/signup.style.scss'

const Signup = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const handleChange = (e) => {
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
         const {name, mobile, pass, email} = userData
         if(!name || !email || !pass || !mobile){
            setErrorMsg('enter all valid Feild')
            return
         }
         dispatch(register(userData))
    }
    return(
        <div className="container">
                {/* error displaying layout */}
            {(errorMsg.length > 0 || user.msg.length > 0) && (
                <div className='err-container'>
                        <h1 className='err-msg'>{errorMsg || user.msg}</h1>
                </div>
            )}
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="name"  placeholder="Username" onChange={handleChange} required/>

               <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>

               <input type="number" name="mobile" placeholder="Mobile"  onChange={handleChange} required/>

               <input type="password" name="pass" placeholder="password"  onChange={handleChange} required/>

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