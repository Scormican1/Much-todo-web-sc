import { useState, useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

export default function TaskList({tasks, setTasks}) {

  useEffect(() => {
  fetch('https://first-api-app-sc.uk.r.appspot.com/tasks')
  .then(response => response.json())
  .then(data => setTasks(data))
  .catch(alert)
  }, [])
  
 
  return (
  <list
  dataSource={tasks}
  size='large' 
  bordered
  renderItem= {(item)=> <Task item= {item} />}
/>
  );
}


