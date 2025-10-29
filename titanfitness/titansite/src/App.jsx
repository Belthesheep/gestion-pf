import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Report from './components/Report';
import Body from './components/Body';

function App() {
  const [mostrarReporte, setMostrarReporte] = useState(false);
  const [userType, setUserType] = useState(null); // null | 'user' | 'admin'

  const toggleReporte = () => {
    setMostrarReporte(!mostrarReporte);
  };

  useEffect(() => {
    const cerrar = () => setMostrarReporte(false);
    document.addEventListener("cerrarReporteGlobal", cerrar);
    return () => document.removeEventListener("cerrarReporteGlobal", cerrar);
  }, []);

  return (
    <>
      <header><Header onReportClick={toggleReporte} userType={userType} setUserType={setUserType} /></header>
      <Body />
      {mostrarReporte && <Report />}
      <footer><Footer /></footer>
    </>
  );
}

export default App;