import express from 'express'
import { EventController } from './event.controller';

const router = express.Router();

router.get('/allevent', EventController.getAllEvent)



router.post('/addevent', EventController.addEvent)

router.delete('/deleteevent/:id',EventController.deleteUnpublishedEvent)




export const eventRoutes = router;