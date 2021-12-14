const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', async (req, res, next) => {
	res.status(200).send('Teste');
});

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
	console.log('Servidor está rodando');
});