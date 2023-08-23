
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface UserRegistrationRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface LeadDetails {
  // Define the fields for lead details here
}

export interface OpportunityDetails {
  // Define the fields for opportunity details here
}

export interface TaskDetails {
  // Define the fields for task details here
}

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/register`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

export const getEmployees = async (): Promise<EmployeeDetails[]> => {
  try {
    const response = await axios.get<EmployeeDetails[]>(`${BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get employees');
  }
};

export const getLeads = async (): Promise<LeadDetails[]> => {
  try {
    const response = await axios.get<LeadDetails[]>(`${BASE_URL}/leads`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get leads');
  }
};

export const getOpportunities = async (): Promise<OpportunityDetails[]> => {
  try {
    const response = await axios.get<OpportunityDetails[]>(`${BASE_URL}/opportunities`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get opportunities');
  }
};

export const getTasks = async (): Promise<TaskDetails[]> => {
  try {
    const response = await axios.get<TaskDetails[]>(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get tasks');
  }
};