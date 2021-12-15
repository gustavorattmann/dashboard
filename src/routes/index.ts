import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (res: Response) => {
	res.status(200).send('Teste');
});

export default router;