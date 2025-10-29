import Cuadrodeprecios from './Cuadrodeprecios'
import GaleriaMotivacion from './GaleriaMotivacion' 
import About from './About'
import "../index.css"

// En este componente se deben agregar los componentes que iran en el body

export default function Body() {
  return (
    <div className="body">
      <div id="galeria"><GaleriaMotivacion /></div>
      <div id="about"><About /></div>
      <div id="precios"><Cuadrodeprecios /></div>
    </div>
  );
}