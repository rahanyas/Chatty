import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

const SettingsPage =  () => {
    const dispatch = useDispatch();

    const  handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div>
            <h1>settings page</h1>
            <button onClick={() => dispatch(logout())}>logout</button>
        </div>
    )
};

export default SettingsPage