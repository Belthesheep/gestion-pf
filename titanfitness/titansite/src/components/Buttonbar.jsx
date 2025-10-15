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


     