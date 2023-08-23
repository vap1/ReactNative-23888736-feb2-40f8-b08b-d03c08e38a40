
export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  assignedTo: Employee;
  createdAt: Date;
  updatedAt: Date;
}

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface TaskRequest {
  title: string;
  description: string;
  assignedTo: number;
}

export interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}

export interface TaskListResponse {
  tasks: Task[];
}

export interface TaskUpdateRequest {
  taskId: number;
  status: TaskStatus;
}

export interface TaskUpdateResponse {
  success: boolean;
  errorMessage?: string;
}