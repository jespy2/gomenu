import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

import { collections } from '../services/database.services';
import { Recipe } from '../models/recipe-models';
import IRecipe from '../models/recipe-models.types';

export const getRecipes = async (req: Request, res: Response) => {
  try {
    // Call find with an empty filter object, meaning it returns all documents in the collection. Saves as Game array to take advantage of types
    const recipes: IRecipe[] = await collections.recipes?.find({}).toArray() as IRecipe[];
    res.status(200).send(recipes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe: IRecipe = req.body as IRecipe;
    const recipe = await collections.recipes?.insertOne(newRecipe);

    if (recipe) {
      res.status(200).send(recipe);
    };
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updateRecipe: IRecipe = req.body as IRecipe;
    const query = { _id: new ObjectId(id) };

    // $set adds the new fields if they don't exist, or updates them if they do
    const result = await collections.recipes?.updateOne(query, { $set: updateRecipe });

    result
      ? res.status(200).send(`Recipe with id: ${id} updated`)
      : res.status(304).send(`Recipe with id: ${id} not found`);
  } catch (error) {
    res.status(400).send(error.message);
  }
}


export const deleteRecipe = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.recipes?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(200).send(`Recipe with id: ${id} deleted`);
    } else if (!result) {
      res.status(400).send(`Recipe with id: ${id} not removed`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Recipe with id: ${id} not found`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const searchRecipes = async (req: Request, res: Response) => {
  const term = req.query.term;

  const agg = [
    {
      $search: {
        index: "searchIndex",
        compound: {
          should: [
            {
              autocomplete: {
              query: term,
              path: "description"
              }
            },
            {
              autocomplete: {
              query: term,
              path: "name"
              }
            },
            {
              autocomplete: {
              query: term,
              path: "recipeInstructions.text"
              }
            },
          ]
        }
      }
    }
  ];
  
  try {
    let result = await collections.recipes?.aggregate(agg)
      .toArray();
    console.log('result: ', result)
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes
}