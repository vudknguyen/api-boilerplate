import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

process.on('SIGINT', () => {
  process.exit();
});

export default app;
