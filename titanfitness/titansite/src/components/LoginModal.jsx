import { useState } from "react";
import "./Modal.css";

export default function LoginModal({ onClose, setUserType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const isAdmin = email.includes("admin@");
    setUserType(isAdmin ? "admin" : "user");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Correo (admin@ para admin)" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn-primary">Entrar</button>
        </form>
        <button onClick={onClose} className="btn-close">Cerrar</button>
      </div>
    </div>
  );
}