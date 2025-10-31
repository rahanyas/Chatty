import { useEffect, useState } from 'react'
import '../styles/page/signup.style.scss'
import { Link } from 'react-router-dom'
import server from '../utils/axiosInstance.utils.js'

const Signup = () => {

    const [user, setIsUser] = useState({
        name : '',
        email : '',
        mobile : '',
        pass : ''
    })

    const [confirmPass, setConfirmPass] = useState('')


    async function register(){
       const res = await server.post('/auth/register', user);
       console.log(res.data)
    }

    function setDataToUser(e){
        const {name, value} = e.target
        setIsUser((prev) => ({...prev, [name] : value}));
        console.log('user',user);               
    };

    return(
        <div className="container">
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="name"  placeholder="Username" onChange={setDataToUser} required/>

               <input type="email" name="email" placeholder="Email" onChange={setDataToUser} required/>

               <input type="number" name="mobile" placeholder="Mobile"  onChange={setDataToUser} required/>

               <input type="password" name="pass" placeholder="password"  onChange={setDataToUser} required/>

               <input type="password" name="confirmPas" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required/>

               <button type="button" onClick={() => register()}>singup</button>
            </div>

                <span style={{textDecoration:'none'}}>already have an account? <Link to='/login' className='login-link'>login</Link></span> 
                
                <span>or</span>
            {/* this for oauth container */}
            
            <button className='oauth-btn'>login with google</button>
          
        </div>
    )
}


export default Signup