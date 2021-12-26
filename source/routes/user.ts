import express from 'express';
import controller from '../controllers/user';


const router = express.Router();

router.get('/get', controller.getUser);
router.post('/create', controller.createUser);
router.put('/update', controller.updateUser);
router.delete('/delete', controller.deleteUser);

export = router;
