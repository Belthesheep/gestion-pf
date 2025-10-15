import AdminNotifications from './AdminNotifications';
import "../index.css"
import Buttonbar from "./Buttonbar"


const Header = ({ onReportClick }) => {
  return (
    <div className="header">
        <h1>Titan Fitness</h1>
        <Buttonbar onReportClick={onReportClick}/>   
        <AdminNotifications />
    </div>
  )
}

export default Header