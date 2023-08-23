
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Opportunity {
  id: number;
  name: string;
  status: string;
  // Add other fields as per the OpportunityDetails schema
}

export interface CreateOpportunityRequest {
  name: string;
  // Add other fields as per the CreateOpportunityRequest schema
}

export interface UpdateOpportunityRequest {
  id: number;
  name?: string;
  status?: string;
  // Add other fields as per the UpdateOpportunityRequest schema
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

export async function createOpportunity(
  request: CreateOpportunityRequest
): Promise<ApiResponse<Opportunity>> {
  try {
    const response = await axios.post<ApiResponse<Opportunity>>(
      `${BASE_URL}/opportunities`,
      request
    );
    return response.data;
  } catch (error) {
    console.error('Error creating opportunity:', error);
    throw error;
  }
}

export async function updateOpportunity(
  request: UpdateOpportunityRequest
): Promise<ApiResponse<Opportunity>> {
  try {
    const response = await axios.put<ApiResponse<Opportunity>>(
      `${BASE_URL}/opportunities/${request.id}`,
      request
    );
    return response.data;
  } catch (error) {
    console.error('Error updating opportunity:', error);
    throw error;
  }
}

export async function getOpportunity(
  opportunityId: number
): Promise<ApiResponse<Opportunity>> {
  try {
    const response = await axios.get<ApiResponse<Opportunity>>(
      `${BASE_URL}/opportunities/${opportunityId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting opportunity:', error);
    throw error;
  }
}

// Add other API functions as per the Opportunity API requirements