import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import RowData from "./RowData";

function Section2Left() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6212ee07f43692c9c6f564f5.mockapi.io/api/v1/projects")
      .then((result) => {
        setTableData(result.data);
        setLoading(false);
      });
  }, []);

  let tableColTitle = [
    "Recent Projects",
    "Created",
    "Reported",
    "Due",
    "Stats",
  ];

  return (
    <div className="">
      <div className="flex-start">
        {tableColTitle.map((title, index) => (
          <div
            className="table-title"
            style={index > 0 ? { marginLeft: "130px" } : {}}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="table-section">
        {loading ? (
          <div className="flex-center" style={{ height: "100%" }}>
            <CircularProgress />
          </div>
        ) : tableData.length === 0 ? (
          <div
            className="flex-center"
            style={{ height: "100%", fontSize: "18px" }}
          >
            No Tasks Yet ...
          </div>
        ) : (
          tableData.map((rowData) => <RowData data={rowData} />)
        )}
      </div>
    </div>
  );
}

export default Section2Left;
