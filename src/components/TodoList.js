import { useState, useEffect } from "react";
import { Add, MoreVert } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import Task from "./Task";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectList, addTasks } from "../app/listSlice";

function TodoList() {
  const [loading, setLoading] = useState(false);
  const tasks = useSelector(selectList);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6212ee07f43692c9c6f564f5.mockapi.io/api/v1/tasks")
      .then((result) => {
        dispatch(addTasks(result.data));
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setLoading(false);
  // }, [tasks]);

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
          tasks.map((task) => (
            <Task
              desc={task.task}
              key={task.id}
              id={task.id}
              type={task.type}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
