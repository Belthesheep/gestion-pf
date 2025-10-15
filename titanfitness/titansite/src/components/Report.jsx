import React, { useState, useEffect } from 'react';
import '../index.css';

const entrenadores = ['Maria', 'Juan', 'Luis'];

const mensajesPrecargados = {
  Maria: [
    { texto: 'Hola Maria, no podré asistir hoy', autor: 'cliente' },
    { texto: 'Gracias por avisar', autor: 'entrenador' },
    { texto: 'Nos vemos mañana.', autor: 'cliente' }
  ],
  Juan: [
    { texto: 'Juan, tuve un inconveniente con el horario.', autor: 'cliente' },
    { texto: 'Okey. Lo reprogramamos.', autor: 'entrenador' }
  ],
  Luis: [
    { texto: 'Luisito, me lesioné el tobillo', autor: 'cliente' },
    { texto: 'Qué macana amigo, descansá y avisame cómo seguís.', autor: 'entrenador' }
  ]
};

export default function Report() {
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);
  const [mensajeNuevo, setMensajeNuevo] = useState('');
  const [mensajes, setMensajes] = useState([]);

  const abrirChat = (nombre) => {
    setEntrenadorSeleccionado(nombre);
    setMensajes(mensajesPrecargados[nombre]);
  };

  const enviarMensaje = () => {
    if (mensajeNuevo.trim() === '') return;
    setMensajes([...mensajes, { texto: mensajeNuevo, autor: 'cliente' }]);
    setMensajeNuevo('');
  };

  useEffect(() => {
    const cerrar = () => {
      setEntrenadorSeleccionado(null);
      document.dispatchEvent(new CustomEvent("cerrarReporteGlobal"));
    };
    document.addEventListener("cerrarReporte", cerrar);
    return () => document.removeEventListener("cerrarReporte", cerrar);
  }, []);

  return (
    <div className="report-container">
      {!entrenadorSeleccionado ? (
        <div className="report-selector">
          <h3>Seleccioná un entrenador</h3>
          {entrenadores.map((nombre) => (
            <button
              key={nombre}
              className="report-button"
              onClick={() => abrirChat(nombre)}
            >
              {nombre}
            </button>
          ))}
          <button
            className="report-close"
            onClick={() => {
              document.dispatchEvent(new CustomEvent("cerrarReporte"));
            }}
          >
            Volver al menú principal
          </button>
        </div>
      ) : (
        <div className="report-modal">
          <div className="report-header">
            <span>Reporte para {entrenadorSeleccionado}</span>
            <button className="report-exit" onClick={() => setEntrenadorSeleccionado(null)}>
              Cerrar chat
            </button>
          </div>
          <div className="report-messages">
            {mensajes.map((msg, i) => (
              <div key={i} className={`report-message ${msg.autor}`}>
                {msg.texto}
              </div>
            ))}
          </div>
          <div className="report-input-area">
            <input
              type="text"
               value={mensajeNuevo}
               onChange={(e) => setMensajeNuevo(e.target.value)}
               onKeyDown={(e) => {
                   if (e.key === 'Enter') enviarMensaje();
                                }}
               placeholder="Escribí tu mensaje..."
              className="report-input"
            />
            <button onClick={enviarMensaje} className="report-send">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}