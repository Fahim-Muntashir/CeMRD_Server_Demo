import { Schema, model } from "mongoose";
import { TMemberProfile } from "./member.interface";

const memberProfileSchema = new Schema<TMemberProfile>({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
      required:true,  
    },
    imgUrl: {
        type: String,
        required:true,
    },
    position: {
        type: String,
      required:true,  
    },
    personalProfile: {
        type: String,
        required:true,
    },
    researchGate: {
        type: String,
        required: true,
        
    },
    github: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true,
    },
    googleScholar: {
        type: String,
        required:true,
    },
    address: {
        type: String,
        required:true,
    },
    about: {
        type: String,
        required:true,
    }
})

export const MemberProfileModel =model<TMemberProfile>('MemberProfile',memberProfileSchema)