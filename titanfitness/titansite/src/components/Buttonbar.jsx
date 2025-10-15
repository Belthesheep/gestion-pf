import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Buttonbar = ({onReportClick}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="taskbar">
      <div>
        <button className="task-button">Menu</button>
        <button className="task-button">Nosotros</button>
        <button className="task-button">Membresias</button>
        <button className="task-button">Contactos</button>
        <button className="task-button" onClick={onReportClick}>
          Reportar
        </button>
      </div>

      <div className="login-group">
        {/* Botón para abrir el modal de Login */}
        <button 
          className="login-button" 
          onClick={() => setShowLogin(true)}
        >
          Iniciar Sesión
        </button>

        {/* Botón para abrir el modal de Registro */}
        <button 
          className="login-button" 
          onClick={() => setShowRegister(true)}
        >
          Crear Cuenta
        </button>
      </div>

      {/* Mostrar los modales cuando sea necesario */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Buttonbar;


     