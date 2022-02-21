import { useState, useEffect } from "react";
import { Add, MoreVert } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import Task from "./Task";
import axios from "axios";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6212ee07f43692c9c6f564f5.mockapi.io/api/v1/tasks")
      .then((result) => {
        setTasks(result.data);
        setLoading(false);
      });
  }, []);

  const date = Date.now();

  return (
    <div className="todo-list">
      <div className="todo-list-header flex-title">
        <div className="todo-left-sec">
          <div className="todo-title">Today To Do List</div>
          <div className="todo-date">
            <div>{moment().format("dddd")}</div>
            <div>{moment(date).format("MMM Do YYYY")}</div>
          </div>
        </div>
        <div className="flex-title">
          <div className="todo-add-icon flex-center">
            <Add sx={{ color: "white", width: "20px", height: "20px" }} />
          </div>
          <div className="todo-add-menu flex-center">
            <MoreVert sx={{ width: "20px", color: "white" }} />
          </div>
        </div>
      </div>

      <div className="todo-tasks">
        {loading ? (
          <div className="flex-center" style={{ height: "100%" }}>
            <CircularProgress />
          </div>
        ) : tasks.length === 0 ? (
          <div
            className="flex-center"
            style={{ height: "100%", fontSize: "18px" }}
          >
            No Tasks Yet ...
          </div>
        ) : (
          tasks.map((task) => <Task desc={task.task} type={task.type} />)
        )}
      </div>
    </div>
  );
}

export default TodoList;
