import { Schema, model } from "mongoose";
import { TResearch } from "./research.interface";

const researchSchema = new Schema<TResearch>({
    researchImg: {
        type: String,
        required:true
    },
    challangeTitle: {
        type: String,
        required:true,
    },
    challangeDescription: {
        type: String,
        required:true,
    },
    responseTitle: {
        type: String,
        required:true,
    },
    responseDescription: {
        type: String,
        required:true,
    }
})

export const ResearchModel=model<TResearch>('Research',researchSchema)