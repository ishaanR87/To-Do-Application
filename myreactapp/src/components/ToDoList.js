import React, {useState} from 'react'
import CreateTask from '../modals/createTask'

export default function ToDoList() {
    const [modal, setModal] = useState(false);

    const toggle = () => {
      setModal(!modal); 
    }

  return (
    <>
    <div className='header text-center'>
        <h2>To-Do List</h2>
        <button className='btn btn-primary mt-3' onClick={() => setModal(true)}>Create task</button>
    </div>

    <div className='task-container'>


    </div>
    <CreateTask toggle = {toggle} modal = {modal}/>
    </>
  )
}
