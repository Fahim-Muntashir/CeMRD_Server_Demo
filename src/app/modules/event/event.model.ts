import { Schema, model } from "mongoose";
import { TEvent } from "./event.interface";

const EventSchema = new Schema<TEvent>({
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required:true,
    },
    link: {
        type:String,
        required:true,
    }
})

export const EventModel = model<TEvent>('Event', EventSchema);