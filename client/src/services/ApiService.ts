import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pela URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
