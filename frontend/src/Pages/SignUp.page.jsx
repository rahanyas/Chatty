import '../styles/page/signup.style.scss'

const Signup = () => {
    return(
        <div className="container">
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="username"  placeholder="Username" required/>
               <input type="email" name="email" placeholder="Email" required/>
               <input type="number" name="mobile" placeholder="Mobile" />
               <input type="password" name="password" placeholder="password" required/>
               <input type="password" name="confirmPas" placeholder="Confirm Password" required/>
               <button type="submit">singup</button>
            </div>
                <span>or</span>
            {/* this for oauth container */}
            
            <button className='oauth-btn'>login with google</button>
          
        </div>
    )
}


export default Signup