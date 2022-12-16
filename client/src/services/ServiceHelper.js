import axios from 'axios';

require('dotenv').config();

export const api = axios.create({
  baseURL: `http://localhost:5000`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    accept: 'application/json'
  },
});
