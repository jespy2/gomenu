import express, { Request, Response } from 'express';
import xray from 'x-ray'
import cors from 'cors';

const app = express();
app.use(cors());
const x = xray();
const port = process.env.PORT || 8000;

// app.get('/testScrape', (req: Request, res: Response) => {
//   x(testURL, `script[type='application/ld+json']`)(function (err, ld_json) {
//     res.send(ld_json)
//   });
//   // res.send('Hello, TypeScript Express!');
//   // stream.pipe(res)
// });

app.get('/api/', (req: Request, res: Response) => {
  const _url = req.query.user_url
  x(_url as string, `script[type='application/ld+json']`)(function (err, ld_json) {
    // res.send(_url)
    res.send(ld_json)
  })
  // res.send(req.query.user_url)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});