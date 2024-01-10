import { Schema, model } from "mongoose";
import { TMemberResearch } from "./memberresearch.interface";

const MemberResearchSchema = new Schema<TMemberResearch>({
    email: {
        type: String,
        required:true  
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})

export const MemberResearchModel = model<TMemberResearch>('MemberResearch', MemberResearchSchema);