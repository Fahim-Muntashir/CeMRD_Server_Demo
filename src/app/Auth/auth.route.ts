import express from 'express';
import { AuthControllers } from './auth.controller';


const router = express.Router();

router.get('/jwt/:email',AuthControllers.createJwt);
router.get('/users/admin/:email',AuthControllers.isAdmin)

export const userAuthRoutes = router;