import express from 'express'
import { NewsController } from './news.controller';

const router = express.Router();

router.get('/allnews', NewsController.getAllNews)

router.get('/singlenews/:id',NewsController.getSingleNews)


router.post('/addnews', NewsController.addNews)

router.delete('/deletenews/:id',NewsController.deleteUnpublishedNews)

router.put('/markpublished/:id', NewsController.markNewsAsPublished);



export const newsRoutes = router;