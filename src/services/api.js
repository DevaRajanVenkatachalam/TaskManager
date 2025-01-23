// 

import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://task-management-app-1-lblv.onrender.com/api",
  
});
console.log(API);

// Automatically include JWT token in requests (if available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default API;
