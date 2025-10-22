import { Link } from "react-router-dom";
import '../styles/page/home.style.scss'

const Home = () => {
    return(
        <div style={{}}>
            <h1 className="home-head">welcome to world</h1>
            <Link to='/signup' className="signup-link">signup</Link>
        </div>
    )
};

export default Home