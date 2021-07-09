import { Router } from 'express';
import { create, read, update, del } from '../controllers/todo.controller.js';

const router = Router();

router.post('/create', create);
router.get('/read', read);
router.put('/update', update);
router.delete('/del', del);

export default router;