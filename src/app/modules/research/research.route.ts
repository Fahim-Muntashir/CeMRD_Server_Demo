import express from 'express'
import { ResearchController } from './research.controller';

const router = express.Router();

router.post('/addresearch', ResearchController.addResearch)

router.delete('/deleteresearch/:id',ResearchController.deleteUnpublishedResearch)

router.put('/markpublished/:id', ResearchController.markResearchAsPublished);



export const ResearchRoutes = router;