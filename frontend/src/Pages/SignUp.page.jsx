import '../styles/page/signup.style.scss'

const Signup = () => {
    return(
        <section className="container">
            {/* for user input credential container */}
            <div className="box1">
               <input type="text" name="username"  placeholder="Username" required/>
               <input type="email" name="email" placeholder="Email" required/>
               <input type="number" name="mobile" placeholder="Mobile" />
               <input type="password" name="password" placeholder="password" required/>
               <input type="password" name="confirmPas" placeholder="Confirm Password" required/>
            </div>

            {/* this for oauth container */}
            <div className="box2">
                    <h1>oauth box</h1>
            </div>
        </section>
    )
}


export default Signup