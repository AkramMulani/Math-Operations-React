
const API_BASE_URL = 'http://192.168.57.82:8080'; // Replace with your API base URL

const ConnectionService = {

  getOperations: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/all`);
      if (!response.ok) {
        console.error(response);
      }
      return response.json();
    } catch(error) {
      console.error(error);
    }
  },

  getOperationsNames: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/names`);
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    } catch (error) {
      console.error(error);
    }
  },

  getExpression: async (name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/exp?name=${name}`)
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
      const response = await fetch(`${API_BASE_URL}/operations/add?name=${name}&exp=${expression}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();

    } catch (error) {
      console.error(error);
    }
  },

  deleteOperation: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/operations/del?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  },
};

export default ConnectionService;