import React, {useEffect, useState} from 'react'
import CreateTask from '../modals/CreateTask';
import Card from './Card';

export default function ToDoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
      let array = localStorage.getItem("taskList");
      if(array){
        let obj = JSON.parse(array);
        setTaskList(obj);
      }
    }, [])

    const toggle = () => {
      setModal(!modal); 
    }

    const saveTask = (taskObj) => {
      let tempList = taskList;
      tempList.push(taskObj);
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList);
      setModal(false);
    }

  return (
    <>
    <div className='header text-center'>
        <h2>To-Do List</h2>
        <button className='btn btn-primary mt-3' onClick={() => setModal(true)}>Create task</button>
    </div>

    <div className='task-container'>
        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index}/>)}

    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
    </>
  )
}
