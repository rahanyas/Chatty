import {useSelector, useDispatch} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const user = useSelector((state) => state.user);        
        // checking if user is loged in , if loged in render the components that passed as children
        if(user.isLogedIn === false){
            return <Navigate to='/login' replace/>
        };

       return <Outlet /> 
};
