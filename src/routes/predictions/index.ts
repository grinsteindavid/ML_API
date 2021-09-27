import { Router } from 'express';
import { get } from './controller';

const router = Router({ mergeParams: true });

router.get('/', get);

export default router;
