
// OpportunityTypes.ts

export interface Opportunity {
  id: number;
  name: string;
  status: string;
  assignedTo: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOpportunityRequest {
  name: string;
  assignedTo: string;
  description: string;
}

export interface UpdateOpportunityRequest {
  id: number;
  name?: string;
  status?: string;
  assignedTo?: string;
  description?: string;
}

export interface OpportunityApiResponse {
  success: boolean;
  errorMessage?: string;
  data?: Opportunity[];
}

export interface CreateOpportunityApiResponse {
  success: boolean;
  errorMessage?: string;
  data?: Opportunity;
}