import { useSelector } from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.user);
    
    const {name} = user
    return (
        <div>
            <h1>welcome {name}</h1>
        </div>
    )
};

export default Home