import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

import { collections } from '../services/database.services';
import Recipe from '../models/recipe-models';
import IRecipe from '../models/recipe-models.types';

export const getRecipes = async (req: Request, res: Response) => {
  await Recipe.find({}, (err: Error, recipes: IRecipe[]) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      })
    }
    if (!recipes.length) {
      return res.status(404).json({
        success: false,
        error: 'no recipes found'
      })
    }
    return res.status(200).json({
      success: true,
      data: recipes
    })
  })
    .catch(err => console.log(err))
};

export const createRecipe = (req: Request, res: Response) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a recipe'
    })
  }

  const recipe = new Recipe(body);

  if (!recipe) {
    return res.status(400).json({
      sucess: false,
      error: Error
    })
  }

  recipe
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: recipe._id,
        message: 'Recipe added'
      })
    })
};

export const updateRecipe = async (req: Request, res: Response) => {
  const { body } = req
  const id = req.params.id;

  try {
    const updatedRecipe: IRecipe = req.body as IRecipe;
    const query = { _id: new ObjectId(id) };
    updatedRecipe.schemaType = body.schemaType;
    updatedRecipe.userName = body.userName;
    updatedRecipe.selectedImage = body.selectedImage;
    updatedRecipe.cookingMethod = body.cookingMethod;
    updatedRecipe.userRating = body.userRating;
    updatedRecipe.userComments = body.userComments;
    updatedRecipe.recipeID = body.recipeID;
    updatedRecipe.image = body.image;
    updatedRecipe.name = body.name;
    updatedRecipe.description = body.description;
    updatedRecipe.nutrition = body.nutrition;
    updatedRecipe.prepTime = body.prepTime;
    updatedRecipe.cookTime = body.cookTime;
    updatedRecipe.totalTime = body.totalTime;
    updatedRecipe.recipeYield = body.recipeYield;
    updatedRecipe.recipeCategory = body.recipeCategory;
    updatedRecipe.recipeCuisine = body.recipeCuisine;
    updatedRecipe.recipeIngredient = body.recipeIngredient;
    updatedRecipe.recipeInstructions = body.recipeInstructions;

    const result = await collections.recipes?.updateOne(query, { $set: updatedRecipe });
    
    result
      ? res.status(200).json({ message: "Recipe updated" })
      : res.status(404).json({ message: "Recipe not updated" });


  } catch(err) {
      return res.status(400).json({
        success: false,
        error: err,
        message: 'Recipe not updated'
    })
  }
}


export const deleteRecipe = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.recipes?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(200).json({ message: "Recipe deleted" });
    } else if (!result) {
      res.status(400).json({ message: "Recipe not deleted" });
    } else if (!result.deletedCount) {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).send('Error deleting recipe');
  }
}

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
}