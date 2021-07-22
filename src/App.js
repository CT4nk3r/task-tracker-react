import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = ( ) => {
  const[showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks] = useState([
      {
          id:1,
          text: 'Doctor',
          day: 'Jan 3 15:30',
          reminder: true,
      },
      {
          id:2,
          text: 'Dog',
          day: 'Jan 3 15:30',
          reminder: false,

      },
      {
          id:3,
          text: 'Kid',
          day: 'Jan 3 15:30',
          reminder: false,
      },
  ])


  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000+1)
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>
      task.id===id?
      //yes
      {...task,reminder:!task.reminder}
      //no
      :task))
  }

  return (
    <div className="container">
      <Header 
        onAdd={()=>setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      ></Header>
      {showAddTask&&<AddTask 
      onAdd={addTask}></AddTask>}
      {
        tasks.length > 0 ? 
          //yes
          (<Tasks tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />)
          //no
          :('No Tasks to show')
      }
    </div>
  )
}




export default App;
