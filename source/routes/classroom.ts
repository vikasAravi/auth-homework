import express from 'express';
import controller from '../controllers/classroom';

const router = express.Router();

router.get('/get', controller.getClassRoom);
router.post('/create', controller.createClassRoom);
router.put('/update', controller.updateClassRoom);
router.delete('/delete', controller.deleteClassRoom);

export default router;
