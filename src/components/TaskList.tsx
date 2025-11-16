import type Task from "../interfaces/Task.inteface";
import type TaskProps from "../interfaces/TaskProps.interface";
import TaskItem from "./TaskItem";

export default function TaskList({tasks,deleteTask,completeTask}:TaskProps){
    return (
    <>
      <h3>ToDo's:</h3>
      <ol>
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask}></TaskItem>
          
        ))}
      </ol>
    </>
  );
}