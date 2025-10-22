import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ()  => {
    // dummy user tracker
    const [isUser, setIsuser] = useState(false)
    return(
        <div className="nav">
            {/* nav first section , includes logo and app name */}

            <div className="nav-col-left">
               <h1 className="nav-head">hey</h1>
               <img src="#" alt="hey_logo" />
            </div>

            {/* nav second section , includes login and profile related btns */}

            <div className="nav-col-right">

                {/* section to show if user is not authenitcated login/signup btns*/}

                  <div className="off-nav-btns">

                    <Link to='/login' className="nav-link">login</Link>
                    <Link to='/signup' className="nav-link">sign-up</Link>

                  </div>

                  {/* now isUser is just dummy */}

                  {isUser && (
                    // section to show when user is authenticated

                  <div className="on-nav-btns">
                    <h1 className="nav-link">profile</h1>
                  </div>
                  )}
            </div>
        </div>
    )
};

export default Navbar