import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Complete Actions and Modules on VUE',
        day: 'Jan 10th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Start a New React Project',
        day: 'July 27th at 9:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Improve Diet and Rest',
        day: 'July 28th at 10:30pm',
        reminder: false,
    },
])
// Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
       task.id === id ? {...task, reminder:
         !task.reminder } : task 
      )
    )
  }

  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ) : (
        'Hey Champ, You Have No Tasks To Show'
      )}
    </div>
  );
}

export default App;