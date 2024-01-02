import express from 'express';
import { AuthControllers } from './auth.controller';


const router = express.Router();

router.get('/jwt/:email',AuthControllers.createJwt);
router.get('/users/role/:email',AuthControllers.userRole)

export const userAuthRoutes = router;