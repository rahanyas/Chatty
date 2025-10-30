import { useEffect, useState } from 'react'
import '../styles/page/signup.style.scss'
import { Link } from 'react-router-dom'
import server from '../utils/axiosInstance.utils.js'

const Signup = () => {

    const [user, setIsUser] = useState({
        username : '',
        email : '',
        mobile : '',
        number : 0,
        password : ''
    })

    const [confirmPass, setConfirmPass] = useState('')

    useEffect(() => {
        register()
    },[])

    async function register(){
        console.log('btn clicked')
            const res = await server.post('/register', {user})
    }

    function setDataToUser(e){
        const {name, value} = e.target
        setIsUser((prev) => ({...prev, [name] : value}))
         
    };

    return(
        <div className="container">
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="username"  placeholder="Username" onChange={setDataToUser} required/>
               <input type="email" name="email" placeholder="Email" onChange={setDataToUser} required/>
               <input type="number" name="mobile" placeholder="Mobile"  onChange={setDataToUser} required/>
               <input type="password" name="password" placeholder="password"  onChange={setDataToUser} required/>
               <input type="password" name="confirmPas" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required/>
               <button type="submit" onClick={() => register()}>singup</button>
            </div>

                <span style={{textDecoration:'none'}}>already have an account? <Link to='/login' className='login-link'>login</Link></span> 
                
                <span>or</span>
            {/* this for oauth container */}
            
            <button className='oauth-btn'>login with google</button>
          
        </div>
    )
}


export default Signup