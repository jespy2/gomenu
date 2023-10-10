import { Router } from "express";

import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipeController";

export const router = Router();

router.get('/', getRecipes);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;