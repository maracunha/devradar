import axios from 'axios';

const api = axios.create({
  // IP from Expo website, under connection.
  baseURL: 'http://192.168.0.47:3333',
});

export default api;