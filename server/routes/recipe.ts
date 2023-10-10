import express, { Router } from "express";

import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipeController";

export const recipeRouter = Router();
recipeRouter.use(express.json());

recipeRouter.get('/', getRecipes);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);