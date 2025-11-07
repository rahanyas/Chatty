import {Link} from 'react-router-dom'

import './login.style.scss'

const LoginPage = () => {
    return (
        <div id='container'>
                <div className="login-box">
                    <input type="email" name='email' placeholder='email' />
                    <input type="password" name="password" placeholder='password'/>
                    <button className='login-btn'>login</button>
                </div>
                <div className="oauth-box">
                    <button className='oauth-Btn'>login with google</button>
                    <p>dont have an account?<Link to='/signup'>sign-in</Link></p>
                </div>
        </div>
    )
};

export default LoginPage