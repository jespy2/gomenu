# GoMenu
An app for grabbing recipes from websites and adding them to your collection called a "cookbook".

## MVP
* Functionality for scraping recipe data from site based on URL entered by user.  A form will allow the user to confirm the data before being entered into cookbook.  This form will also allow users to manually enter recipes.

* Cookbooks will be filterable and searchable

* Other quality of life features will include user comments and ratings to help with organization

* Users' data will be password protected

## Stretch Goals
* Feature:  slidebars on recipe cards to adjust ingredient measurements based on number of servings
* Feature:  user generated categories for further organizing a cookbook

## Long term considerations:
* If the project were to scale to manage large number of entries per user (many 1000's), could consider changing the data flow to maintian snapshot data for users recipes and do by-id calls to pull recipes from database.  Would also look at a caching layer (Redis) to manage memoizing user data for faster retrieval.