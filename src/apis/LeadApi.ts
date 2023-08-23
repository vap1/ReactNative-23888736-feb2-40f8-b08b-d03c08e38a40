
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Lead {
  id: number;
  name: string;
  contact: string;
  status: string;
  // Add other lead properties here
}

export interface LeadApiResponse {
  success: boolean;
  errorMessage?: string;
  leads?: Lead[];
}

export async function getLeads(): Promise<LeadApiResponse> {
  try {
    const response = await axios.get(`${BASE_URL}/leads`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leads:', error);
    return { success: false, errorMessage: 'Failed to fetch leads' };
  }
}

export async function addLead(lead: Lead): Promise<LeadApiResponse> {
  try {
    const response = await axios.post(`${BASE_URL}/leads`, lead);
    return response.data;
  } catch (error) {
    console.error('Error adding lead:', error);
    return { success: false, errorMessage: 'Failed to add lead' };
  }
}

export async function updateLead(lead: Lead): Promise<LeadApiResponse> {
  try {
    const response = await axios.put(`${BASE_URL}/leads/${lead.id}`, lead);
    return response.data;
  } catch (error) {
    console.error('Error updating lead:', error);
    return { success: false, errorMessage: 'Failed to update lead' };
  }
}

export async function deleteLead(leadId: number): Promise<LeadApiResponse> {
  try {
    const response = await axios.delete(`${BASE_URL}/leads/${leadId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting lead:', error);
    return { success: false, errorMessage: 'Failed to delete lead' };
  }
}