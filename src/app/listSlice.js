import { createSlice } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
  name: "list",
  initialState: {
    tasks: []
  },
  reducers: {
    addTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      let idx = state.tasks.findIndex((val) => val.id === action.payload);
      console.log(idx);
      state.tasks.splice(idx, 1);
    }
  }
});

export const { addTasks, addTask, deleteTask } = ListSlice.actions;
export const selectList = (state) => state.list.tasks;
export default ListSlice.reducer;
