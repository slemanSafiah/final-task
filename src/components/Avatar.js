// import { Avatar } from "@mui/material";
import ProfileCircle from "./ProfileCircle";
import { useAuth } from "../context/userContext";
import "./components.style.css";

function AvatarComp() {
  const { currentUser } = useAuth();

  return (
    <div className="avatar-block">
      <div className="avatar-description">
        <div className="avatar-title">{currentUser.name}</div>
        <div className="avatar-title-desc">{currentUser.job}</div>
      </div>
      {/* <Avatar alt="Profile Pic" src="/static/images/avatar/1.png" /> */}
      <ProfileCircle />
    </div>
  );
}

export default AvatarComp;
