feature/trainer-report
import Header from './Header'

const Buttonbar = ({onReportClick}) => {
  return (
        <nav className="taskbar">
            <div>
                <button className="task-button"> Menu</button>
                <button className="task-button"> Nosotros</button>
                <button className="task-button"> Membresias</button>
                <button className="task-button"> Contactos</button>
                <button className="task-button" 
                    onClick={() => {console.log("Botón Reportar clickeado"); 
                    onReportClick();}}>
                        Reportar
                    </button>
            </div>

            <div className="login-group">
                <button className="login-button">Login</button>
                <button className="login-button">Create</button>
            </div>
        </nav>
  )
}

export default Buttonbar

import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Buttonbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="taskbar">
      <div>
        <button className="task-button">Menu</button>
        <button className="task-button">Nosotros</button>
        <button className="task-button">Membresias</button>
        <button className="task-button">Contactos</button>
        <button className="task-button">Reportes</button>
      </div>

      <div className="login-group">
        {/* Botón para abrir el modal de Login */}
        <button 
          className="login-button" 
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

        {/* Botón para abrir el modal de Registro */}
        <button 
          className="login-button" 
          onClick={() => setShowRegister(true)}
        >
          Create
        </button>
      </div>

      {/* Mostrar los modales cuando sea necesario */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Buttonbar;
main


     