import express from 'express';
import { MemberResearchController } from './memberresearch.controller';

const router = express.Router();

router.post('/postresearch', MemberResearchController.postAResearch);
router.get('/getresearch/:email', MemberResearchController.getAllResearchByUser);

export const MemberResearchRoutes = router;
