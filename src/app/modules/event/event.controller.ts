import { Request, Response } from "express"
import { EventService } from "./event.service";




const getAllEvent = async (req: Request, res: Response) => {
    try {
        const result = await EventService.getAllEventFromDB();
    
        res.status(200).json({
            success: true,
            message: "All event are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}


const addEvent = async(req:Request,res:Response) => {
    const data = req.body;
    const newEvent = await EventService.addNewEventIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Event is Created Successfully',
        data: newEvent,
    })

}

// delete deleteUnpublishedEvent
const deleteUnpublishedEvent = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const result = await EventService.deleteUnpublihedEventFromDB(eventId);

    if (result) {
        res.status(200).json({
            success: true,
            message:'Event is Deleted Successfully'
        }
        )
    } else {
        res.status(404).json({
            success: false,
            message:'Event not found or Already published'
        })
}
}




export const EventController = {
    getAllEvent,
    addEvent,
    deleteUnpublishedEvent,
}