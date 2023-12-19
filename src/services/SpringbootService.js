import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

const SpringbootService = {
  getOperationsNames: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/names`);
      if (!response.ok) {
        console.log('Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  getExpression: async (name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/exp/${name}`)
      if (!response.ok) {
        console.log('Something went wrong');
      }
      const data = await response.text();
      return data;
    } catch(error) {
      console.error(error);
    }
  },

  addOperation: async (name, expression) => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/add/name=${name}/exp=${expression}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        alert('Something went wrong');
        return -1;
      }
      alert(`${name} added successfully`);
      return 1;

    } catch (error) {
      console.error(error);
    }
  },

  deleteOperation: async (name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/del/{${name}}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok()) {
        alert('Something went wrong');
        return -1;
      }
      alert(`${name} deleted`);
      return 1;

    } catch (error) {
      console.error(error);
    }
  },
};

export default SpringbootService;
