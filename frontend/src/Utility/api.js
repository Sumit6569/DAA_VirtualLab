import axios from "axios";

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",  // The base URL is taken from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;