import express from 'express';
import controller from '../controllers/school';
import Auth from '../middleware/roleBasedAuth';

const router = express.Router();

router.get('/get', controller.getSchool);
router.post('/create', controller.createSchool);
router.put('/update', controller.updateSchool);
router.delete('/delete', controller.deleteSchool);

export default router;
