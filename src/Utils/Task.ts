import type Task from "../interfaces/Task.inteface";
import type { TaskStatus } from "../interfaces/TaskStatus.type";
import { v4 as uuidv4 } from "uuid";

export default class NewTask implements Task {
  title: string;
  status: TaskStatus;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = uuidv4();
    this.status = "pending";
  }
}