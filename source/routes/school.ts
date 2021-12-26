import express from 'express';
import controller from '../controllers/school';

const router = express.Router();

router.get('/get', controller.getSchool);
router.post('/create', controller.createSchool);
router.put('/update', controller.updateSchool);
router.delete('/delete', controller.deleteSchool);

export default router;
