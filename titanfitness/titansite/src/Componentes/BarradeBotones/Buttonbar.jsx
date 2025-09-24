import React from "react";
import './Buttonbar.css';

const Buttonbar = () => {
    const buttons = [
        {name: 'Inicio', link: '/'},
        { name: 'Contactos', link: '/contactos' },
        { name: 'Nosotros', link: '/nosotros' },
        { name: 'Entrenadores', link: '/entrenadores' },
        { name: 'Membresías', link: '/membresias' },
    ];

    return (
        <nav className="buttonbar">
            {buttons.map((button) => (
        <a key={button.name} href={button.link} className="nav-button">
          {button.name}
        </a>
      ))}
        </nav>
    );
};

export default Navbar;