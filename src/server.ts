require('dotenv').config();

const env = process.env;

import express from 'express';

import { Router, Request, Response } from 'express';

const cors = require('cors');

const app = express();

const route = Router();

app.use(cors());
app.use(express.json());

route.get('/', async (req, res, next) => {
	res.status(200).send(env.APP_NAME);
});

app.use(route);

app.listen(env.APP_PORT, () => {
	console.log(`Servidor está rodando em ${env.APP_PROTOCOL}://${env.APP_URL}:${env.APP_PORT}`);
});