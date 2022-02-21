import { Stack } from "react-bootstrap";
import { Avatar, AvatarGroup } from "@mui/material";
import ProgressBar from "./ProgressBar";

function Card({ companyLogo, avatars, progress, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-image">
        <img
          src={companyLogo}
          alt="logo"
          width="40px"
          height="40px"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="card-desc">
        <Stack gap={2}>
          <Stack gap={1}>
            <div className="card-desc-title">Team Members</div>
            <div className="avatar-group ">
              <AvatarGroup max={4}>
                {avatars.map((av) => (
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    alt="Remy Sharp"
                    src={av}
                  />
                ))}
              </AvatarGroup>
            </div>
          </Stack>
          <Stack gap={2}>
            <div className="card-desc-title flex-title">
              <div>Project Completion</div>
              <div>{progress}%</div>
            </div>
            <ProgressBar progress={progress} />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Card;
