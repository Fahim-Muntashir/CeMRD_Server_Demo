import express from 'express'
import { AdviserController } from './adviser.controller';

const router = express.Router();

router.get('/allblog', AdviserController.getAllBlog)

router.post('/addblog', AdviserController.addBlog)

router.delete('/deleteblog/:id',AdviserController.deleteUnpublishedBlog)



export const AdviserRoutes = router;