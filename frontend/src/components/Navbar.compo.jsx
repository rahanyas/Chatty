import { useState } from "react";
import { Link } from "react-router-dom";
import{FaComments} from 'react-icons/fa';

const Navbar = ()  => {
    // dummy user tracker
    const [isUser, setIsuser] = useState(false)
    return(
        <div className="nav">
            {/* nav first section , includes logo and app name */}

            <div className="nav-col-left">
               <h1 className="nav-head">hey</h1>
               <FaComments className='nav-icon'/>
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
                    <Link to='/profile' className="nav-link">profile</Link>
                  </div>
                  )}
            </div>
        </div>
    )
};

export default Navbar