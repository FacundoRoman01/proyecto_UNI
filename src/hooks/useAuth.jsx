import { useState, useEffect } from "react";
import axios from "axios";

// Este hook maneja la autenticación y el estado del usuario
const useAuth = () => {
  const [user, setUser] = useState(null); // Estado para guardar los datos del usuario
  const [loading, setLoading] = useState(true); // Para saber si estamos cargando la sesión
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // Al cargar el componente, intentamos recuperar la sesión del usuario si existe un token
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:5000/api/verifyToken", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data.user);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false); // Si no hay token, no hace falta verificar nada
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Guardamos el token
        setUser(response.data.user); // Establecemos el usuario logueado
      }
    } catch (error) {
      setError(error);
    }
  };

  const register = async (fullName, email, password, accountType) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        fullName,
        email,
        password,
        accountType,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Guardamos el token
        setUser(response.data.user); // Establecemos el usuario logueado
      }
    } catch (error) {
      setError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
};

export default useAuth;
