import express, { Application, Request, Response } from 'express';
import seminaryRouter  from './routes/seminary.route'
import taskRouter  from './routes/task.route';

const port = 5000;
const app: Application = express();



app.use(express.json())
app.use('/seminary', seminaryRouter);
app.use('/task', taskRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// app.post('/seminary', seminaryRouter)

app.listen(port, () => {
    console.log(`Your API is now listen on port ${port}`);
  });  



export default app; 
