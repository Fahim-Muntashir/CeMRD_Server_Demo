import { Schema, model } from "mongoose";
import { TAdviser } from "./adviser.interface";

const AdviserSchema = new Schema<TAdviser>({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
    },
    name: {
        type: String,
        reqiured:true
    },
    position: {
        type: String,
        required:true,     
    },
    imgLink: {
        type: String,
        required:true,
    },
    linkedin: {
        type: String,
        required:true,
    },
    googleScholar: {
        type: String,
        required:true,
    }
})

export const AdviserModel =model<TAdviser>('Adviser',AdviserSchema)