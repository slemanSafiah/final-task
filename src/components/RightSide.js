import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function RightSide() {
  let hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("https://6212ee07f43692c9c6f564f5.mockapi.io/api/v1/appointments")
      .then((result) => {
        setAppointments(result.data);
      });
  }, []);

  return (
    <div className="right-side">
      <div className="right-side-header flex-space-between">
        <div className="right-side-header-title">
          <div className="todo-date">calendar</div>
          <div>
            {moment().format("dddd")}, {moment().format("Do MMM")}
          </div>
        </div>
        <div className="calendar-image">
          <img
            src="/static/images/event.svg"
            width="100px"
            height="100px"
            alt="calendar logo"
          />
        </div>
      </div>
      <div className="calendar-dates">
        {hours.map((hour, index) => (
          <div className="calendar-hour flex-center">
            <div>
              <div style={{ fontSize: "14px" }}>{hour}</div>
              <div style={{ fontSize: "6px" }}>{index > 6 ? "AM" : "PM"}</div>
            </div>
            <div className="divider-date" />
          </div>
        ))}
        {appointments.map((ap) => (
          <div
            className="appointment"
            style={{
              height: ap.dur.toString() + "px",
              top: ap.top.toString() + "px",
              borderRightColor: ap.borderColor,
              backgroundColor: ap.color,
            }}
          >
            <div style={{ padding: "5px" }}>{ap.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;
