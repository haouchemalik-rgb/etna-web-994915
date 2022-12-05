// API SERVER FILE

import express, { Application, Request, Response } from 'express';

const port = 2000;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Your API is now listen on port ${port}`);
  });  

export default app;