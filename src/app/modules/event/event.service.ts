import { TEvent } from "./event.interface";
import { EventModel } from "./event.model";


const getAllEventFromDB = async () => {
    const result = await EventModel.find({})
    return result;
}


const addNewEventIntoDB = async (eventData: TEvent) => {
    const result = await EventModel.create(eventData);
    return result;
}


// delete Blog service
const deleteUnpublihedEventFromDB = async (newsId: string) => {
    const result = await EventModel.deleteOne({ _id: newsId, published: false })
    return result.deletedCount===1;
}



export const EventService = {
    getAllEventFromDB,
    addNewEventIntoDB,
    deleteUnpublihedEventFromDB,
}