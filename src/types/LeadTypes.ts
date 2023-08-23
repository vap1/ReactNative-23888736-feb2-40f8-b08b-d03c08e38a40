
interface Lead {
  id: number;
  name: string;
  contactDetails: string;
  status: LeadStatus;
  assignedTo: Employee;
  createdAt: Date;
  updatedAt: Date;
}

enum LeadStatus {
  NEW = "New",
  IN_PROGRESS = "In Progress",
  CLOSED = "Closed",
}

interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface LeadResponse {
  success: boolean;
  errorMessage?: string;
  leads: Lead[];
}

interface LeadRequest {
  leadId: number;
}

export type { Lead, LeadStatus, Employee, LeadResponse, LeadRequest };