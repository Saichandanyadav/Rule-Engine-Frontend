import axios from 'axios';
import { API_BASE_URL } from './apiConfig';


export const getAllRules = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching rules", error);
    return [];
  }
};


export const getRuleById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching rule with ID ${id}`, error);
  }
};


export const createRule = async (ruleData) => {
  try {
    const response = await axios.post(API_BASE_URL, ruleData);
    return response.data;
  } catch (error) {
    console.error("Error creating rule", error);
  }
};

export const updateRule = async (id, updatedRule) => {
  try {
      const response = await fetch(`https://rule-engine-backend-h2xv.onrender.com/api/rules/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRule),
      });

      if (!response.ok) {
          throw new Error('Failed to update the rule');
      }

      return await response.json(); 
  } catch (error) {
      console.error('Error updating rule:', error);
      throw error; 
  }
};

export const deleteRule = async (id) => {
  try {
      const response = await fetch(`https://rule-engine-backend-h2xv.onrender.com/api/rules/${id}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          throw new Error('Failed to delete the rule');
      }

      return await response.json(); 
  } catch (error) {
      console.error('Error deleting rule:', error);
      throw error; 
  }
};