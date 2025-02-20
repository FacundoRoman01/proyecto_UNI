import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8080/proyect_uni/back-end/api";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Verificar si el usuario está autenticado al cargar la página
  useEffect(() => {
    axios
      .get(`${API_URL}/user.php`, { withCredentials: true })
      .then(({ data }) => setUser(data.success ? data.user : null))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  // Función auxiliar para manejar peticiones de autenticación (login y register)
  const authRequest = async (endpoint, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, data, { withCredentials: true });
      console.log("Respuesta completa:", response.data); // Verifica la respuesta
      if (response.data.success) {
        setUser(response.data.user);
        return response.data;
      } else {
        setError(response.data.message);
        return false;
      }
    } catch (error) {
      setError(error.response?.data?.message || "Error en el servidor");
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  

  // Función para iniciar sesión
  const login = async (email, password) => {
    const success = await authRequest("login.php", { email, password });
    console.log("¿Login exitoso?", success);
  
    if (success && success.redirect && success.user) {
      console.log("Redirigiendo a:", success.redirect);
  
      // Asegurarse de que success.user.id existe antes de guardarlo en localStorage
      if (success.user.id) {
        localStorage.setItem('userId', success.user.id);
      } else {
        console.error("Error: La respuesta del servidor no contiene un ID de usuario.");
      }
  
      navigate(`/${success.redirect}`, { replace: true });
    } else {
      console.error("Error: La respuesta del servidor no tiene los datos esperados.");
    }
  
    return success;
  };
  

  // Función para registrar un usuario
  const register = async (fullName, email, password, phone) => {
    return await authRequest("register.php", { fullName, email, password, phone });
  };

  // Función para cerrar sesión
  const logout = async () => {
    setLoading(true);
    try {
      await axios.get(`${API_URL}/logout.php`, { withCredentials: true });
      setUser(null);
      if (window.location.pathname !== "/login") navigate("/login"); // Evita redirección innecesaria
    } catch (error) {
      console.error("Error cerrando sesión", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };
};

export default useAuth;
