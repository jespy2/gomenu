import mongoose from 'mongoose';
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

const Nutrition = new mongoose.Schema(
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

const InstructionStep = new mongoose.Schema(
  {
    schemaType: { type: String, required: false, default: 'HowToStep'},
    name: { type: String, required: false},
    text: { type: String, required: false},
    url: { type: String, required: false},
  }
)

const InstructionSection = new mongoose.Schema(
  {
    schemaType: { type: String, required: false, default: 'HowToSection'},
    itemListElement: { type: [InstructionStep], required: false }
  }
)

const Instructions = new mongoose.Schema(
  {
    HowToStep: { type: [InstructionStep], required: false},
    HowToSection: { type: [InstructionSection], required: false},

  }
)

const Recipe = new mongoose.Schema(
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
      nutrition: { type: Nutrition, required: false},
      prepTime: { type: String, required: false},
      cookTime: { type: String, required: false},
      totalTime: { type: String, required: false},
      recipeYield: { type: [String], required: false},
      recipeCategory: { type: [String], required: false},
      recipeCuisine: { type: [String], required: false},
      recipeIngredient: { type: [String], required: true},
      recipeInstructions: { type: Instructions, required: true},
  },
  { timestamps: true },
)

export default mongoose.model('recipes', Recipe)