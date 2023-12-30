import express from 'express'
import { ResearchController } from './research.controller';

const router = express.Router();

router.post('/addresearch', ResearchController.addResearch)

export const ResearchRoutes = router;