import { Router } from 'express';
import { predict, getModel } from './controller';
import { middleware } from './middleware';
import { Body } from './schemas';

const router = Router({ mergeParams: true });

router.post('/', [middleware(Body, 'body')], predict);
router.get('/get-model', [], getModel);

export default router;
