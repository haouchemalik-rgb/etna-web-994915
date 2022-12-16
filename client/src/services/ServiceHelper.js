import axios from 'axios';

require('dotenv').config();

export const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT}/`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    accept: 'application/json'
  },
});
