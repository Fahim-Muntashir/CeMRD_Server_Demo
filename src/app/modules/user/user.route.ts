import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/users',UserControllers.createUser)
router.get('/users',UserControllers.getAllUser)
router.get('/users/:userId',UserControllers.getSingleUser)
router.patch('/users/makefaqulty/:userId',UserControllers.makeFaqulty)
router.patch('/users/deletefaqulty/:userId',UserControllers.deleteFaqulty)
router.delete('/users/:userId',UserControllers.deleteUser)
export const UserRoutes = router;