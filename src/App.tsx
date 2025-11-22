import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import type Task from "./interfaces/Task.inteface";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

export type TaskStatus = "completed" | "pending";

class NewTask implements Task {
  private static lastId: number = 0;
  title: string;
  status: TaskStatus;
  id: number;

  constructor(title: string) {
    this.title = title;
    NewTask.lastId += 1;
    this.id = NewTask.lastId;
    this.status = "pending";
  }
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskStatus | "all">("all");

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
          <Filter filterTasks={setFilter} />
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
