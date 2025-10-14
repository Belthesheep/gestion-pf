import AdminNotifications from './components/AdminNotifications';
import "../index.css"
import Buttonbar from "./Buttonbar"
const Header = () => {
  return (
    <div className="header">
        <h1>Titan Fitness</h1>
        <Buttonbar /> 
        <AdminNotifications />  
    </div>
  )
}

export default Header