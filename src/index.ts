import express from 'express';
import { usersRouter } from './routes/usersRouter';

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
