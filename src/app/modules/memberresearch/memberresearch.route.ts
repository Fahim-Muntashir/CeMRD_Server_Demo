import express from 'express'
const router = express.Router();
import { MemberResearchController } from './memberresearch.controller';

router.post('/postresearch',MemberResearchController.postAResearch)


export const MemberResearchRoutes = router;
