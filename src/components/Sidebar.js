import {
  Home,
  Settings,
  Message,
  CalendarToday,
  PermDeviceInformationRounded
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-options">
        <div className="side-bar-item">
          <Home fontSize="small" />
        </div>
        <div className="side-bar-item">
          <CalendarToday fontSize="small" />
        </div>
        <div className="side-bar-item">
          <Message fontSize="small" />
        </div>
        <div className="side-bar-item">
          <PermDeviceInformationRounded fontSize="small" />
        </div>
        <div className="side-bar-item">
          <Settings fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
