import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {

    const username = useSelector(state => state.username)

    if (username) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    } 
    
}; 

export default ProtectedRoutes;