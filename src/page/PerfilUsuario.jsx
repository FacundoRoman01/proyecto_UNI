import axios from "axios";
import { toast, Toaster } from 'sonner';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header.jsx";
import "../style/perfilUsuario.css";

const PerfilUsuario = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    avatar: "",
    banner: "",
    images: [],
    university: "",
    companylogo: "",
    about: "",
    url_paginas: "",
    services: "", // Nuevo campo para los servicios
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        axios
          .get("http://localhost:8080/proyect_uni/back-end/api/user.php", { params: { id: userId } })
          .then((response) => {
            if (response.data) {
              setUser(response.data);
              localStorage.setItem("user", JSON.stringify(response.data));
            }
          })
          .catch(() => setError("Error al obtener datos del usuario."))
          .finally(() => setLoading(false));
      }
    }
  }, [userId, navigate]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const files = e.target.files;
      setFormData({ ...formData, [e.target.name]: files });

      if (e.target.name === "avatar" && files.length > 0) {
        setAvatarPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Recorrer todos los campos de formData y agregarlos a formDataToSend
    Object.keys(formData).forEach((key) => {
      if (formData[key] && formData[key].length > 0) {
        if (key === "images") {
          Array.from(formData[key]).forEach((file) => {
            formDataToSend.append("images[]", file);
          });
        } else if (key === "services") {
          // Aseguramos que 'services' siempre sea una cadena
          const servicesValue = typeof formData.services === 'string' ? formData.services : '';
          const servicesArray = servicesValue.split(",").map((s) => s.trim());
          formDataToSend.append("services", servicesArray.join(", "));
        }

        else {
          formDataToSend.append(key, formData[key]);
        }
      }
    });

    formDataToSend.append("id", userId);

    try {
      const response = await axios.post("http://localhost:8080/proyect_uni/back-end/api/insert_user.php", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        toast.success("Usuario actualizado con éxito");
        navigate(`/detalle/${userId}`);
      } else {
        toast.error(response.data.error || "Error al registrar usuario.");
      }
    } catch (error) {
      toast.error("Error al registrar usuario.");
      setError("Error al registrar usuario.");
    }
  };



  //   const handleLogout = () => {
  //     localStorage.removeItem("userId");
  //     localStorage.removeItem("user");
  //     navigate("/login");
  //   };

  return (
    <div>
      <Header />
      <Toaster position="top-right" />
      <div className="perfilUsuario-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : user ? (
          <div className="perfilUsuario-info">
            <h1>Bienvenido, {user.name}</h1>
            <img src={user.avatar} alt="Foto de perfil" className="perfilUsuario-avatar" />
            <img src={user.banner} alt="Banner" className="perfilUsuario-banner" />
            <p><strong>Sobre mí:</strong> {user.about}</p>
            <p><strong>Universidad:</strong> {user.university}</p>
            <p><strong>Empresa:</strong> <img src={user.companylogo} alt="Logo empresa" className="perfilUsuario-companylogo" /></p>
            {/* <button onClick={handleLogout} className="logout-button">Cerrar sesión</button> */}
          </div>
        ) : (
          <p>No se encontraron datos del usuario.</p>
        )}

        <div className="perfilUsuario-form">
          <h2>Agrega tu informacion y fotos para ver su portfolio o branding</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre<input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
            <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
            <label>WhatsApp<input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required /></label>
            <label>Avatar<input type="file" name="avatar" accept="image/*" onChange={handleChange} /></label>
            {avatarPreview && <img src={avatarPreview} alt="Vista previa" className="perfilUsuario-avatar-preview" />}
            <label>Habilidades del estudiante (separados por comas)
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Ej: Desarrollo web, Diseño UX, Marketing digital"
                required
              />
            </label>
            <label>Banner<input type="file" name="banner" accept="image/*" onChange={handleChange} /></label>
            <label>Presentaciones<input type="file" name="images" multiple onChange={handleChange} /></label>
            <label>Logo Empresa<input type="file" name="companyLogo" accept="image/*" onChange={handleChange} /></label>
            {/* luego ver esto y ajustarlo mucho mejor */}
            <label htmlFor="university">Universidad:</label>
            <select name="university" value={formData.university} onChange={handleChange} required>
              <option value="">Seleccione una universidad</option>
              <option value="Da Vinci">Da Vinci</option>
              <option value="UADE">UADE</option>
              <option value="ORT">ORT</option>
              <option value="Belgrano">Belgrano</option>
              <option value="SanAndrés">San Andrés</option>
              <option value="UTN">UTN</option>
              <option value="Kennedy">Kennedy</option>
              <option value="Palermo">Palermo</option>
              <option value="CoderHouse">CoderHouse</option>
            </select>

            <label>Sobre mí<textarea name="about" value={formData.about} onChange={handleChange} required /></label>
            <label>URL páginas<input type="text" name="url_paginas" value={formData.url_paginas} onChange={handleChange} required /></label>
            <button type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
