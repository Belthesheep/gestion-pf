import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Buttonbar = ({ onReportClick, userType, setUserType }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

 const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 130;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth'
    });
  }
};
  const handleLogout = () => setUserType(null);

  return (
    <nav className="taskbar">
      <div>
        <button className="task-button" onClick={() => scrollTo('galeria')}>Inicio</button>
        <button className="task-button" onClick={() => scrollTo('about')}>Nosotros</button>
        <button className="task-button" onClick={() => scrollTo('precios')}>Membresías</button>
        <button className="task-button" onClick={() => scrollTo('precios')}>Contacto</button>
        {userType === 'user' && <button className="task-button" onClick={onReportClick}>Reportar</button>}
      </div>

      <div className="login-group">
        {userType ? (
          <button className="login-button" onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <>
            <button className="login-button" onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
            <button className="login-button" onClick={() => setShowRegister(true)}>Crear Cuenta</button>
          </>
        )}
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} setUserType={setUserType} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Buttonbar;