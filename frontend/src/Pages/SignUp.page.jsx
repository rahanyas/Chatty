import '../styles/page/signup.style.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, updateFeild } from '../features/user/userSlice.js' 
const Signup = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const handleChange = (e) => {
        const {name, value} = e.target;

        console.log(name, value);
        
        dispatch(updateFeild({field : name, value}))
    }

    const userData = {
        name : user.name,
        mobile : user.mobile,
        email : user.email,
        pass : user.pass
    }

    return(
        <div className="container">

            <div>
                {user.msg.length > 0 && (
                    <h1>{user.msg}</h1>
                )}
            </div>
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="name"  placeholder="Username" onChange={handleChange} required/>

               <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>

               <input type="number" name="mobile" placeholder="Mobile"  onChange={handleChange} required/>

               <input type="password" name="pass" placeholder="password"  onChange={handleChange} required/>

               <input type="password" name="confirmPas" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required/>

               <button type="button" onClick={() => dispatch(register(userData))}>singup</button>
            </div>

                <span style={{textDecoration:'none'}}>already have an account? <Link to='/login' className='login-link'>login</Link></span> 
                
                <span>or</span>
            {/* this for oauth container */}
            
            <button className='oauth-btn'>login with google</button>
          
        </div>
    )
}


export default Signup