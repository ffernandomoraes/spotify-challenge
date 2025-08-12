export const isDevelopment = import.meta.env.MODE === 'development';

console.log(import.meta.env.NODE_ENV, isDevelopment);

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3001';
