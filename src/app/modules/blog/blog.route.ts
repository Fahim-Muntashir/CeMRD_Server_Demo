import express from 'express'
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/addblog', BlogController.addBlog)

router.delete('/deleteblog/:id',BlogController.deleteUnpublishedBlog)

router.put('/markpublished/:id', BlogController.markBlogAsPublished);



export const BlogRoutes = router;