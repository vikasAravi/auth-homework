import express from 'express';
import controller from '../controllers/classroom';
import Auth from '../middleware/roleBasedAuth';

const router = express.Router();

router.get('/get', controller.getClassRoom);
router.post('/create', controller.createClassRoom);
router.put('/update', controller.updateClassRoom);
router.delete('/delete', controller.deleteClassRoom);

export default router;
