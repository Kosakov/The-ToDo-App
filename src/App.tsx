import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import type Task from "./interfaces/Task.inteface";
import TaskList from "./components/TaskList";

class NewTask implements Task {
  private static lastId: number = 0;
  title: string;
  completed: boolean;
  id: number;

  constructor(title: string) {
    this.title = title;
    NewTask.lastId += 1;
    this.id = NewTask.lastId;
    this.completed = false;
  }
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(title: string): void {
    let newTask = new NewTask(title);
    console.log(newTask);
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTask(taskId: number): void {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function completeTask(taskId: number): void {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          let updatedTask = { ...task, completed: true };
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
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </section>
    </>
  );
}

export default App;
