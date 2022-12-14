import { Login } from './screens/Login&Register/Login/Login';
import { Register } from './screens/Login&Register/Register/Register';
import { Home } from './screens/Home/Home';
import { Checkout } from './screens/Checkout/Checkout';

import { useAuth } from './context/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Paths = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route
                path='/'
                element={user ? <Home /> : <Navigate to='/login' />}
                exact
            />
            <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' />}
                exact
            />
            <Route
                path='/register'
                element={!user ? <Register /> : <Navigate to='/' />}
                exact
            />
            {user && <Route path='/check' element={<Checkout />} exact />}
        </Routes>
    );
};
