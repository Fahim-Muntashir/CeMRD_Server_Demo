import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api',UserRoutes)



app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;