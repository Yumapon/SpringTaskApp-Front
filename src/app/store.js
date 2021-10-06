import { configureStore } from "@reduxjs/toolkit";
import DBTasksReducer from "../modules/DBTasks";
import Task from "../modules/Task";

export default configureStore({
    reducer: {
      tasks: DBTasksReducer,
      task: Task
    },
  });