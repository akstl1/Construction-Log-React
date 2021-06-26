import * as express from 'express';
import DB from './db';
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
	res.json('World');
});

router.get('/api/materials', async (req, res) => {
	try {
		let materials = await DB.Materials.all();
		res.json(materials);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

export default router;
