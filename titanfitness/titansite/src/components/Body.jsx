import Cuadrodeprecios from './Cuadrodeprecios'
import GaleriaMotivacion from './GaleriaMotivacion' 
import About from './About'
import "../index.css"

// En este componente se deben agregar los componentes que iran en el body

const Body = () => {
  return (

    <div className="body">
        <GaleriaMotivacion />
        <About /> 
        <Cuadrodepagos />
    </div>
  )
}

export default Body