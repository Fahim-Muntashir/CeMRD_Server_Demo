import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";

const BlogSchema = new Schema<TBlog>({
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
    img2Link: {
        type: String,
        required:true,
    },
    description2: {
        type: String,
        required:true,
    },
    published: {
        type: Boolean,
        default:false,
    }
})

export const BlogModel=model<TBlog>('Blog',BlogSchema)