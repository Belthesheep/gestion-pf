import { useState } from "react";
import "./Modal.css";

export default function RegisterModal({ onClose }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Registro:", form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="btn-primary">
            Crear Cuenta
          </button>
        </form>
        <button onClick={onClose} className="btn-close">
          Cerrar
        </button>
      </div>
    </div>
  );
}
