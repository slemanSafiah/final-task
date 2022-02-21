import AvatarComp from "./Avatar";

import "./components.style.css";
import "../styles.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span className="circle" />
        <span className="logo-title">Pr</span>
      </div>
      <ul className="nav-bar-list">
        <div className="nav-bar-item">
          <li className="nav-bar-item-route">Dashboard</li>
        </div>
        <div className="nav-bar-item">
          <li className="nav-bar-item-route">All Projects</li>
        </div>
        <div className="nav-bar-item">
          <li className="nav-bar-item-route">Members</li>
        </div>
        <div className="nav-bar-item">
          <li className="nav-bar-item-route">Stats</li>
        </div>
        <div className="nav-bar-item">
          <li className="nav-bar-item-route">Help</li>
        </div>
      </ul>
      <AvatarComp />
    </div>
  );
}
export default Navbar;
