import { Schema, model } from "mongoose";
import { TNews } from "./news.interface";

const NewsSchema = new Schema<TNews>({
    title: {
        type:String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    img1Link: {
        type: String,
        required:true,
    },
    description1: {
        type: String,
        required:true,
    },
    description2: {
        type: String,
        required:true,
    },
    published: {
        type: Boolean,
        default:true,
    }
})

export const NewsModel=model<TNews>('News',NewsSchema)