import { useState } from "react";
import { Checkbox } from "@mui/material";
import { CheckOutlined, CheckRounded } from "@mui/icons-material";
import { MoreVert, InfoOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

function Task({ desc, type }) {
  let colors = {
    1: "red",
    2: "green",
    3: "yellow",
    4: "blue"
  };

  let types = {
    1: "Urgent and Important",
    2: "Not Urgent or Important",
    3: "Urgent not Important",
    4: "Important not Urgent"
  };

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex-start">
      <Checkbox
        icon={
          <CheckRounded
            fontSize="small"
            color="disabled"
            sx={{ bordereRadius: "50%" }}
          />
        }
        checkedIcon={
          <CheckOutlined
            fontSize="small"
            color="success"
            sx={{
              color: "#0BD166",
              bordereRadius: "50px"
            }}
          />
        }
        onClick={handleClick}
      />
      <div className="task-desc-container">
        <span
          className="task-title"
          style={
            checked ? { textDecoration: "line-through", color: "#9c9c9c" } : {}
          }
        >
          {desc}
        </span>
        <div className="task-type" style={{ color: colors[type] }}>
          {types[type]}
        </div>
        <div className="divider"></div>
      </div>
      <div className="tooltip-task flex-center">
        <Tooltip title="Back-end">
          <InfoOutlined sx={{ width: "20px", color: "white" }} />
        </Tooltip>
        <MoreVert sx={{ width: "20px", color: "white" }} />
      </div>
    </div>
  );
}

export default Task;
