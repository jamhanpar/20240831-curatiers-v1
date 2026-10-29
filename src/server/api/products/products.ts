import { Router } from 'express';
import AmazonProductsData from '../../mockData/AmazonProductData.json' assert { type: 'json' };

const router = Router();

router.get('/', (_, res) => {
  res.send(AmazonProductsData.results);
});

export default router;
