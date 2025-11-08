import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const user = useSelector((state) => state.user);        
        // checking if user is loged in , if loged in render the components that passed as children
        if(user.isLogedIn === false){
            return <Navigate to='/login' />
        };

       return children 
};
