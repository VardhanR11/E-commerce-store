// Import axios for making HTTP requests
import axios from 'axios';

// Base URL for the Fake Store API
const BASE_URL = 'https://fakestoreapi.com';

// API service object containing all API-related functions
export const api = {
  // Fetch all products from the API
  getProducts: async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  },

  // Fetch all available product categories
  getCategories: async () => {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  },

  // Fetch products filtered by specific category
  getProductsByCategory: async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  }
}; 