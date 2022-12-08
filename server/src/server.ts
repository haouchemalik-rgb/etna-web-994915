import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/users.route';
import ChannelRouter from './routes/channels.route';

require('dotenv').config();

const port = process.env.SERVER_PORT;
const app: Application = express();

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:2000',
  credentials: true,
}))
app.use(express.json());


app.use('/user', UserRouter);
app.use('/channel', ChannelRouter);

app.listen(port, () => {
  console.log(`Your API is now listening on port ${port}`);
});  
