import express, { Request, Response } from 'express';
import xray from 'x-ray'
import cors from 'cors';

import { connectToDatabase } from './services/database.services';
import { recipeRouter } from './routes/recipe';

const app = express();
app.use(cors());
app.use(express.json())

const x = xray();

const port = process.env.PORT || 8000;

app.get('/api/', (req: Request, res: Response) => {
  const _url = req.query.user_url
  x(_url as string, `script[type='application/ld+json']`)(function (err, ld_json) {
    res.send(ld_json)
  });
})

connectToDatabase()
  .then(() => {
    app.use("/api/recipes", recipeRouter);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
      console.error("Database connection failed", error);
      process.exit();
  });