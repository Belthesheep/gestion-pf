import "../index.css"
import Buttonbar from "./Buttonbar"


const Header = ({ onReportClick }) => {
  return (
    <div className="header">
        <h1>Titan Fitness</h1>
        <Buttonbar onReportClick={onReportClick}  />  
    </div>
  )
}

export default Header