import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.const';

const router = express.Router();

router.post('/',UserControllers.createUser)
router.get('/',auth(USER_ROLE.admin),UserControllers.getAllUser)
router.get('/:userId',UserControllers.getSingleUser)
router.patch('/makefaqulty/:userId',auth(USER_ROLE.admin), UserControllers.makeFaqulty)
router.patch('/deletefaqulty/:userId',auth(USER_ROLE.admin),UserControllers.deleteFaqulty)
router.delete('/:userId',UserControllers.deleteUser)
export const UserRoutes = router;