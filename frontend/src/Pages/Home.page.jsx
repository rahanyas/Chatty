import { Link } from "react-router-dom";
import '../styles/page/home.style.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-head">
          Welcome to ChatWorld
        </h1>
        <p className="home-subhead">
          Connect with friends, family, and colleagues instantly. Chat, call, and share your moments in one place.
        </p>
        <Link to="/demo" className="home-btn">
          Show Demo
        </Link>
      </div>
    </div>
  );
};

export default Home;
