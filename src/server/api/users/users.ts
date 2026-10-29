import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.send('User endpoint');
});

export default router;
