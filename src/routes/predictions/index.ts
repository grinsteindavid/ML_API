import { Router } from 'express';
import { predict } from './controller';

const router = Router({ mergeParams: true });

router.post('/', predict);

export default router;
