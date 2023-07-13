// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [showAddtask, setShowAddtask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch Data
  useEffect(() => {
    
    const getTask = async ()=> {
      const taskfromServer = await fetchTasks()
      setTasks(taskfromServer)
    }

    getTask()


    // console.log("I called once")
  },[]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    console.log(data)

    return data
    // setTasks([data])
  }
  // Add Task

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = {
      id: id,
      ...task,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  // Delet Task
  const DeleteTask = async (id) => {
    // console.log('delete',id)
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method : 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleAddTaskPopup = () => {
    setShowAddtask(!showAddtask);
  };

  // const name = "Rana"
  // const x = false
  return (
    <div className="container">
      <Header
        toggleAddTaskPopup={toggleAddTaskPopup}
        showAddtask={showAddtask}
      />
      {showAddtask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
