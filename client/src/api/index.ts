import axios from 'axios';
import { Key } from 'readline';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
})

export const getRecipe = (url: any) => api.get('/api', {
  params: {
    user_url: url
  }
});
export const getAllRecipes = () => api.get(`/api/recipes`);
export const insertRecipe = (payload: any) => api.post(`/api/recipes`, payload);
export const updateRecipeById = (id: string, payload: any) => api.put(`api/recipes/${id}`, payload);
export const deleteRecipeById = (id: string) => api.delete(`api/recipes/${id}`);

const apis = {
  getRecipe,
  getAllRecipes,
  insertRecipe,
  updateRecipeById,
  deleteRecipeById,
}

export default apis