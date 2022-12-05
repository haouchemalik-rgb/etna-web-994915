// API SERVER FILE

import express, { Application, Request, Response } from 'express';

const port = 5000;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;