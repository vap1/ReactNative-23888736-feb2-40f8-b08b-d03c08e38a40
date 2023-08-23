
export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface EmployeeDetails {
  employees: Employee[];
}

export interface EmployeeResponse {
  success: boolean;
  errorMessage?: string;
}

export interface EmployeeApi {
  getEmployees(): Promise<EmployeeDetails>;
  addEmployee(employee: Employee): Promise<EmployeeResponse>;
  updateEmployee(employee: Employee): Promise<EmployeeResponse>;
  deleteEmployee(id: number): Promise<EmployeeResponse>;
}