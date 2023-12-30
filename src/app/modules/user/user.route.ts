import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/',UserControllers.createUser)
router.get('/',UserControllers.getAllUser)
router.get('/:userId',UserControllers.getSingleUser)
router.patch('/makefaqulty/:userId',UserControllers.makeFaqulty)
router.patch('/deletefaqulty/:userId',UserControllers.deleteFaqulty)
router.delete('/:userId',UserControllers.deleteUser)
export const UserRoutes = router;