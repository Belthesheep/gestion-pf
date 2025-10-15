import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Report from './components/Report'

function App() {
  const [mostrarReporte, setMostrarReporte] = useState(false);

  const toggleReporte = () => {
    console.log("toggleReporte ejecutado");
    setMostrarReporte(!mostrarReporte);
  };

  useEffect(() => {
    const cerrar = () => setMostrarReporte(false);
    document.addEventListener("cerrarReporteGlobal", cerrar);
    return () => document.removeEventListener("cerrarReporteGlobal", cerrar);
  }, []);

  return (
    <>
      <header><Header onReportClick={toggleReporte}/></header>
      <Body />
      {mostrarReporte && <Report />}
      <footer><Footer /></footer>
    </>
  )
}

export default App