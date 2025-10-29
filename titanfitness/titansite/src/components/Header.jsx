import AdminNotifications from './AdminNotifications';
import "../index.css";
import Buttonbar from "./Buttonbar";

const Header = ({ onReportClick, userType, setUserType }) => {
  return (
    <div className="header">
      <h1>Titan Fitness</h1>
      <Buttonbar onReportClick={onReportClick} userType={userType} setUserType={setUserType} />
      {userType === 'admin' && <AdminNotifications />}
    </div>
  );
};

export default Header;