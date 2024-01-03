import { TBlog } from "./blog.interface"
import { BlogModel } from "./blog.model"


const getAllBlogFromDB = async () => {
    const result = await BlogModel.find({})
    return result;
}


const getSingleBlog = async (blogId: any) => {
    const result =await BlogModel.findById(blogId)
   return result;
}


const addNewBlogIntoDB = async (blogData: TBlog) => {
    const result = await BlogModel.create(blogData);
    return result;
}


// delete Blog service
const deleteUnpublihedBlogFromDB = async (blogId: string) => {
    const result = await BlogModel.deleteOne({ _id: blogId, published: false })
    return result.deletedCount===1;
}


// Mark Blog as Published
const markBlogAsPublished = async (blogId: string) => {
    const result = await BlogModel.updateOne({ _id: blogId,}, { published: true });

    return result.modifiedCount > 0;
}


export const BlogService = {
    getAllBlogFromDB,
    getSingleBlog,
    addNewBlogIntoDB,
    deleteUnpublihedBlogFromDB,
    markBlogAsPublished
}