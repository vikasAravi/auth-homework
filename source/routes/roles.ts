import express from 'express';
import controller from '../controllers/roles';

const router = express.Router();

router.get('/get', controller.getRoles);
router.post('/create', controller.createRoles);

export default router;
