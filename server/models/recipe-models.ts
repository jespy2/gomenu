import mongoose from 'mongoose';
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

const nutritionSchema = new mongoose.Schema(
  {
    schemaType: { type: String, required: false, default: 'NutritionInformation'},
    calories: { type: String, required: true},
    carbohydrateContent: { type: String, required: true},
    cholesterolContent: { type: String, required: true},
    fatContent: { type: String, required: true},
    fiberContent: { type: String, required: true},
    proteinContent: { type: String, required: true},
    saturatedFatContent	: { type: String, required: true},
    servingSize: { type: String, required: true},
    sodiumContent: { type: String, required: true},
    sugarContent: { type: String, required: true},
    transFatContent: { type: String, required: true},
    unsaturatedFatContent: { type: String, required: true},
  }
)

const instructionStepSchema = new mongoose.Schema(
  {
    schemaType: { type: String, required: false, default: 'HowToStep'},
    name: { type: String, required: false},
    text: { type: String, required: false},
    url: { type: String, required: false},
  }
)

const instructionSectionSchema = new mongoose.Schema(
  {
    schemaType: { type: String, required: false, default: 'HowToSection'},
    itemListElement: { type: [instructionStepSchema], required: false }
  }
)

const instructionsSchema = new mongoose.Schema(
  {
    HowToStep: { type: [instructionStepSchema], required: false},
    HowToSection: { type: [instructionSectionSchema], required: false},

  }
)

const recipeSchema = new mongoose.Schema(
  {
      id: { type: mongoose.Schema.Types.UUID, default: () => uuidv4(), required: true },
      schemaType: { type: String, required: false, default: 'Recipe'},
      userName: { type: String, required: true},
      selectedImage: { type: String, required: false},
      cookingMethod: { type: [String], required: true},
      userRating: { type: Number, required: false},
      userComments: { type: String, required: false},
      recipeID: { type: String, required: true},
      image: { type: [String], required: false},
      name: { type: String, required: true},
      description: { type: String, required: true},
      nutrition: { type: nutritionSchema, required: false},
      prepTime: { type: String, required: false},
      cookTime: { type: String, required: false},
      totalTime: { type: String, required: false},
      recipeYield: { type: [String], required: false},
      recipeCategory: { type: [String], required: false},
      recipeCuisine: { type: [String], required: false},
      recipeIngredient: { type: [String], required: true},
      recipeInstructions: { type: instructionsSchema, required: true},
  },
  { timestamps: true },
)

export const Recipe = mongoose.model('Recipe', recipeSchema)