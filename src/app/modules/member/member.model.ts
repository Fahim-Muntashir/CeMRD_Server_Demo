import { Schema, model } from "mongoose";
import { TMemberProfile } from "./member.interface";

const memberProfileSchema = new Schema<TMemberProfile>({
    displayName: {
        type: String,
        required: true,
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