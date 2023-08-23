
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface EmployeeApi {
  getEmployees(): Promise<Employee[]>;
  addEmployee(employee: Employee): Promise<void>;
  updateEmployee(employee: Employee): Promise<void>;
  deleteEmployee(employeeId: number): Promise<void>;
}

export const employeeApi: EmployeeApi = {
  getEmployees: async () => {
    try {
      const response = await axios.get<Employee[]>(`${BASE_URL}/employees`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch employees');
    }
  },

  addEmployee: async (employee: Employee) => {
    try {
      await axios.post(`${BASE_URL}/employees`, employee);
    } catch (error) {
      throw new Error('Failed to add employee');
    }
  },

  updateEmployee: async (employee: Employee) => {
    try {
      await axios.put(`${BASE_URL}/employees/${employee.id}`, employee);
    } catch (error) {
      throw new Error('Failed to update employee');
    }
  },

  deleteEmployee: async (employeeId: number) => {
    try {
      await axios.delete(`${BASE_URL}/employees/${employeeId}`);
    } catch (error) {
      throw new Error('Failed to delete employee');
    }
  },
};