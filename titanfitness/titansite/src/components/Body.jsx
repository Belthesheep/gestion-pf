import Cuadrodepagos from './Cuadrodepagos'
import GaleriaMotivacion from './GaleriaMotivacion' 
import "../index.css"

// En este componente se deben agregar los componentes que iran en el body

const Body = () => {
  return (

    <div className="body">
        <Cuadrodepagos/>
        <GaleriaMotivacion />  
    </div>
  )
}

export default Body