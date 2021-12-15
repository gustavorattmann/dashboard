require('dotenv').config();

const env = process.env;

import express from 'express';
import routes from './routes/index';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(env.APP_PORT, () => {
	console.log(`Servidor está rodando em ${env.APP_PROTOCOL}://${env.APP_URL}:${env.APP_PORT}`);
});