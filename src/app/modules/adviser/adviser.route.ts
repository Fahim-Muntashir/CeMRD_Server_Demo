import express from 'express'
import { AdviserController } from './adviser.controller';

const router = express.Router();

router.get('/alladviser', AdviserController.getAllAdviser)

router.post('/addadviser', AdviserController.addAdviser)

router.delete('/deleteadviser/:id',AdviserController.deleteUnpublishedAdviser)



export const AdviserRoutes = router;