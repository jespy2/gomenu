// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import IRecipe from '../models/recipe-models.types';

// Global Variables
export const collections: { recipes?: mongoDB.Collection<IRecipe> } = {};

// Initialize Connection
export async function connectToDatabase() {
  // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
  dotenv.config();

  // Create a new MongoDB client with the connection string from .env
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);

  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  // Apply schema validation to the collection
  // await applySchemaValidation(db);

  // Connect to the collection with the specific name from .env, found in the database previously specified
  const recipesCollection = db.collection<IRecipe>(process.env.RECIPES_COLLECTION_NAME as string);

  // Persist the connection to the Recipe collection
  collections.recipes = recipesCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${recipesCollection.collectionName}`);
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Recipe model, even if added elsewhere.
// async function applySchemaValidation(db: mongoDB.Db) {
//   const jsonSchema = {
//       $jsonSchema: {
//           bsonType: "object",
//           required: ["name", "price", "category"],
//           additionalProperties: false,
//           properties: {
//               _id: {},
//               name: {
//                   bsonType: "string",
//                   description: "'name' is required and is a string",
//               },
//               price: {
//                   bsonType: "number",
//                   description: "'price' is required and is a number",
//               },
//               category: {
//                   bsonType: "string",
//                   description: "'category' is required and is a string",
//               },
//           },
//       },
//   };

  // Try applying the modification to the collection, if the collection doesn't exist, create it 
//  await db.command({
//       collMod: process.env.GAMES_COLLECTION_NAME,
//       validator: jsonSchema
//   }).catch(async (error: mongoDB.MongoServerError) => {
//       if (error.codeName === 'NamespaceNotFound') {
//           await db.createCollection(process.env.RECIPES_COLLECTION_NAME as string, {validator: jsonSchema});
//       }
//   });
// }