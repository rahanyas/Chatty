import { useSelector } from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.user);
    console.log(user);
    
    const {name} = user
    return (
        <div>
            <h1>welcome {name}</h1>
        </div>
    )
};

export default Home