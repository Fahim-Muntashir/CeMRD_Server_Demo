import { TNews } from "./news.interface"
import { NewsModel } from "./news.model"


const getAllNewsFromDB = async () => {
    const result = await NewsModel.find({})
    return result;
}


const getSingleNews = async (blogId: any) => {
    const result =await NewsModel.findById(blogId)
   return result;
}


const addNewNewsIntoDB = async (blogData: TNews) => {
    const result = await NewsModel.create(blogData);
    return result;
}


// delete Blog service
const deleteUnpublihedNewsFromDB = async (newsId: string) => {
    const result = await NewsModel.deleteOne({ _id: newsId, published: false })
    return result.deletedCount===1;
}


// Mark Blog as Published
const markNewsAsPublished = async (blogId: string) => {
    const result = await NewsModel.updateOne({ _id: blogId,}, { published: true });

    return result.modifiedCount > 0;
}


export const NewsService = {
    getAllNewsFromDB,
    getSingleNews,
    addNewNewsIntoDB,
    deleteUnpublihedNewsFromDB,
    markNewsAsPublished
}