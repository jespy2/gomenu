import { ObjectId } from "mongodb";

export interface INutrition {
	"@type": "NutritionInformation";
	calories?: string;
	carbohydrateContent?: string;
	cholesterolContent?: string;
	fatContent?: string;
	fiberContent?: string;
	proteinContent?: string;
	saturatedFatContent	?: string;
	servingSize?: string;
	sodiumContent?: string;
	sugarContent?: string;
	transFatContent?: string;
	unsaturatedFatContent?: string;
}

export interface IInstructionStep{
	"@type": "HowToStep";
	name?: string;
	text?: string;
	url?: string;
}

export interface IInstructionSection{
	"@type"?:  "HowToSection";
	itemListElement: IInstructionStep[]
}    

interface IRecipeFromLDJSON {
	schemaType: "Recipe";	
	recipeID?: string;
	image?: string | string[];	
	name?: string;	
	description?: string;	
	nutrition?: INutrition
	prepTime?: string;
	cookTime?: string;
	totalTime?: string;
	recipeYield?: string | string[];
	recipeCategory?: string | string[];
	recipeCuisine?: string | string[];
	recipeIngredient?: string[];
	recipeInstructions?: IInstructionStep[] | IInstructionSection[] 
}

export enum CookingMethod {
	instantpot = "Instant Pot",
	stove = "Stove",
	oven = "Oven",
	airfryer = "Air Fryer",
	microwave = "Microwave",
	none = "None"
}

export interface IRecipe extends IRecipeFromLDJSON {	
  _id: string;
	userName: string;
	selectedImage?: string;
	cookingMethod?: CookingMethod[];
	userRating?: number;
	userComments?: string;
}