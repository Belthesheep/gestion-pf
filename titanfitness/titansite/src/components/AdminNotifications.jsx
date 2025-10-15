import React, { useEffect, useState } from 'react';
import '../index.css';

const AdminNotifications = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Simulación de tareas pendientes (puedes reemplazar con fetch a tu API)
    const tareasSimuladas = [
      { id: 1, mensaje: "💳 Juan Pérez tiene una cuota vencida." },
      { id: 2, mensaje: "🧘 Clase de yoga sin confirmar para mañana." },
      { id: 3, mensaje: "🔧 La caminadora #3 necesita mantenimiento." },
      { id: 4, mensaje: "📥 Nuevo cliente: María Gómez. Validar inscripción." }
    ];
    setTareas(tareasSimuladas);
  }, []);

  return (
    <div className="notification-panel">
      <h3>🔔 Notificaciones pendientes</h3>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.mensaje}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNotifications;
