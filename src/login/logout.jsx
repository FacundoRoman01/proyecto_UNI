// src/components/Logout.js

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirigir al login
    };

    return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default Logout;
