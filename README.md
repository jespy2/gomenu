Long term considerations:
* If the project were to scale to manage large number of entries per user (many 1000's), could consider changing the data flow to maintian snapshot data for users recipes and do by-id calls to pull recipes from database.  Would also look at a caching layer (Redis) to manage memoizing user data for faster retrieval.