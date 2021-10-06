import React,{ useEffect } from "react";
import TaskTable from "../components/organisms/TaskTable";
import { useSelector, useDispatch} from "react-redux";
import { selectTasks, fetchTasks, seletTasksCleared } from "../modules/DBTasks";



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
  
  
 
  /*
  function createData(num, name, content, deadline, client) {
    console.log("いいね");
    return { num, name, content, deadline, client };
  }
  */

const TaskTableContainer = () => {
    //const tasksCleard = useSelector(seletTasksCleared);
    //const tasks = useSelector(selectTasks);
    //const dispatch = useDispatch();

    /**
    * API呼び出し
    */
   /*
    useEffect(() => {
        if (tasksCleard) {
            dispatch(fetchTasks());
        }
    });

    return (
        <TaskTable tasks = {tasks.taskList} />
    )
    */
   return(
    <TaskTable tasks = {rows} />
   )

};

export default TaskTableContainer;