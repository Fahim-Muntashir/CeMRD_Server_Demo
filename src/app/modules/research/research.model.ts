import { Schema, model } from "mongoose";
import { TResearch } from "./research.interface";

const researchSchema = new Schema<TResearch>({
    
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    vanue: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required:true,
    },
    published: {
        type: Boolean,
        default:false,
    }
})

export const ResearchModel=model<TResearch>('Research',researchSchema)