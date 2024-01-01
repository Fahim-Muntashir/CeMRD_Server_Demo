import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());


app.use('/api',router)


app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;