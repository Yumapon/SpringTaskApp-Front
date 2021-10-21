import React,{ useEffect } from "react";
import HomePageTaskData from "../components/organisms/HomePageTaskDataOrganisms";
import { useSelector, useDispatch} from "react-redux";
import { selectTasks, fetchTasks, seletTasksCleared } from "../modules/DBTasks";
import { taskNameEdited, deadlineEdited, clientEdited, createTask, updateTask, deleteTask } from "../modules/Task";


const TaskTableContainer = () => {
    const tasksCleard = useSelector(seletTasksCleared);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    /**
    * API呼び出し
    */
    useEffect(() => {
        if (tasksCleard) {
            dispatch(fetchTasks());
        }
    });

    /**
     * hundler
     */
    const rowAddHandler = (task) => {
      console.log("rowAddHandlerを呼び出します");
      console.log(task)
      dispatch(taskNameEdited(task.name))
      dispatch(deadlineEdited(task.deadline))
      dispatch(clientEdited(task.client))
      dispatch(createTask(task))
      return
    }

    const rowUpdateHandler = (task) => {
      console.log("rowUpdateHandlerを呼び出します");
      console.log(task)
      console.log(task.num)
      dispatch(taskNameEdited(task.name))
      dispatch(deadlineEdited(task.deadline))
      dispatch(clientEdited(task.client))
      dispatch(updateTask(task))
      return
    }

    const rowDeleteHandler = (task) => {
      console.log("rowUpdateHandlerを呼び出します");
      console.log(task)
      console.log(task.num)
      dispatch(deleteTask(task))
      return
    }

    return (
        <HomePageTaskData 
          rowAddHandler={rowAddHandler}
          rowUpdateHandler={rowUpdateHandler}
          rowDeleteHandler={rowDeleteHandler}
          data={JSON.parse(JSON.stringify(tasks))} 
        />
    )
};

export default TaskTableContainer;