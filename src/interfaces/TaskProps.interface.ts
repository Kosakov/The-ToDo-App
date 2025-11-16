import type Task from "./Task.inteface";

export default interface TaskProps {
tasks: Task[],
deleteTask:(taskId: number) => void
completeTask:(taskId: number) => void
}
