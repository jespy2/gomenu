import axios from 'axios';
import { Key } from 'readline';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
})

// export const testScrape = () => api.get(`/testScrape`)
export const getRecipe = (url: any) => api.get('/api', {
  params: {
    user_url: url
  }
});
export const getAllRecipes = () => api.get(`/api/recipe`);
export const instertRecipe = (payload: any) => api.post(`/api/recipe`, payload);
export const updateRecipeById = (id: Key, payload: any) => api.put(`/recipe/${id}`, payload);
export const deleteRecipeById = (id: Key) => api.delete(`/recipe/${id}`);

const apis = {
  getRecipe,
  getAllRecipes,
  instertRecipe,
  updateRecipeById,
  deleteRecipeById,
}

export default apis