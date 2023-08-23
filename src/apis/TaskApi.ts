
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export interface TaskDetails {
  // Define the fields for task details here
}

export interface TaskApi {
  getTasks(): Promise<Task[]>;
  createTask(taskDetails: TaskDetails): Promise<UserRegistrationResponse>;
  updateTask(taskId: number, taskDetails: TaskDetails): Promise<UserRegistrationResponse>;
  deleteTask(taskId: number): Promise<UserRegistrationResponse>;
}

export const taskApi: TaskApi = {
  getTasks: async () => {
    try {
      const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch tasks');
    }
  },

  createTask: async (taskDetails: TaskDetails) => {
    try {
      const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/tasks`, taskDetails);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create task');
    }
  },

  updateTask: async (taskId: number, taskDetails: TaskDetails) => {
    try {
      const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/tasks/${taskId}`, taskDetails);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  },

  deleteTask: async (taskId: number) => {
    try {
      const response = await axios.delete<UserRegistrationResponse>(`${BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete task');
    }
  },
};