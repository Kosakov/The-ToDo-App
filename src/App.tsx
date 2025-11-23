import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import type Task from "./interfaces/Task.inteface";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import type { TaskStatus } from "./interfaces/TaskStatus.type";
import NewTask from "./Utils/Task";
import { getItemsFromLocalStorage } from "./Utils/Utils";


function App() {
  const [tasks, setTasks] = useState<Task[]>(getItemsFromLocalStorage("tasks") || []);
  const [filter, setFilter] = useState<TaskStatus | "all">("all");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  function addTask(title: string): void {
    let newTask = new NewTask(title);
    console.log(newTask);
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTask(taskId: string): void {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function completeTask(taskId: string): void {
    setTasks((prevTasks) =>
      prevTasks.map((task: Task) => {
        if (task.id === taskId) {
          let updatedTask: Task = { ...task, status: "completed" };
          return updatedTask;
        }
        return task;
      })
    );
  }

  return (
    <>
      <header>
        <h1>The ToDo App</h1>
      </header>
      <section>
        <TaskInput addTask={addTask} />
      </section>
      <section>
        <span>
          Show:
          <TaskFilter filterTasks={setFilter} />
        </span>
        <TaskList
          filter={filter}
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </section>
    </>
  );
}

export default App;
