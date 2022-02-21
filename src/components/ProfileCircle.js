import { useState } from "react";
import { useAuth } from "../context/userContext";
import {
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider
} from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ProfileCircle() {
  const hist = useNavigate();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    hist("/");
  };

  return (
    <div className="profile-circle-container">
      <Tooltip title="account setting">
        <Avatar
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        keepMounted
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        PaperProps={{
          elevation: 12,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 2
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem disabled>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        <MenuItem disabled>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileCircle;
