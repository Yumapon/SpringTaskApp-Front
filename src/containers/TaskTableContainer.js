import React,{ useEffect } from "react";
import HomePageTaskData from "../components/organisms/HomePageTaskDataOrganisms";
import { useSelector, useDispatch} from "react-redux";
import { selectTasks, fetchTasks, seletTasksCleared } from "../modules/DBTasks";
import { selectTask, taskCleared, taskNameEdited, taskContentsEdited, deadlineEdited, clientEdited, createTask, updateTask, deleteTask } from "../modules/Task";


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

    //JSON.parse(JSON.stringify(useSelector(state=>state.cycleSlice))); 
    
    /*
    const rows = [
      { id: 1, name: '丘本悠真', content: 'testetstテスト', deadline: '2005-06-07', client: '田中慎吾'},
      { id: 2, name: 'test2', content: 'testetst2', deadline: '2021-09-19', client: 'test2'},
      { id: 3, deadline: 'Lannister', name: 'Jaime', client: 45 },
      { id: 4, deadline: 'Stark', name: 'Arya', client: 16 },
      { id: 5, deadline: 'Targaryen', name: 'Daenerys', client: null },
      { id: 6, deadline: 'Melisandre', name: null, client: 150 },
      { id: 7, deadline: 'Clifford', name: 'Ferrara', client: 44 },
      { id: 8, deadline: 'Frances', name: 'Rossini', client: 36 },
      { id: 9, deadline: 'Roxie', name: 'Harvey', client: 65 },
    ];

   return(
    <HomePageTaskData 
      rowAddHandler={null}
      rowUpdateHandler={null}
      rowDeleteHandler={null}
      data={rows} 
    />
   )
   */
};

export default TaskTableContainer;