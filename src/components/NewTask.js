import { useEffect, useState } from "react";
import { Input, Button } from "antd";
// import { response } from "express";

export default function NewTask ({ setTasks}){
const [newTask, setNewTask] = useState('')
const handleButtonSubmit = () => {
    if(newTask.trim()=== ''){
        return
    }
    const taskObject ={
        task: newTask,
    }


        fetch('https://much-todo-sc.uc.r.appspots.com/tasks', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(taskObject),
    })
    .then(() => {
        setNewTask('')
        fetch('https://much-todo-sc.uc.r.appspot.com/tasks')
        .then(response => response.json())
    .then(data => setTasks(data))

      .catch((err) => console.error(err));
  })


  const handleInputText = (event) => {
    setNewTask(event.target.value);
  }

 

  return (
    <>
      
      <Input.search
        placeholder="Enter task name"
        enterButton='Add Task'
         value={newTask} 
         size='large'
         onSearch={handleButtonSubmit}
         onChange={handleInputText}
      />
    </>
  )
  }
