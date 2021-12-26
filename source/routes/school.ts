import express from 'express';
import controller from '../controllers/school';
import Auth from "../middleware/roleBasedAuth"; 

const router = express.Router();

router.get('/get', Auth.schoolAuth && Auth.schoolAuth, controller.getSchool);
router.post('/create', Auth.schoolAuth, controller.createSchool);
router.put('/update', Auth.schoolAuth, controller.updateSchool);
router.delete('/delete', Auth.schoolAuth, controller.deleteSchool);

export default router;
