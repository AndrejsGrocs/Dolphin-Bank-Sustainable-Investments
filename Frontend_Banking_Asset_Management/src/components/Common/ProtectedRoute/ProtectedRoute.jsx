import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, auth }) => {
    //auth = true --> render children in the other case navigate to the login page.
    return auth ? children : <Navigate to="/login" />
}

export default ProtectedRoute;