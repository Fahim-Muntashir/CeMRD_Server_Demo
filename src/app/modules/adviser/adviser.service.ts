import { TAdviser } from "./adviser.interface"
import { AdviserModel } from "./adviser.model"


const getAllAdviserFromDB = async () => {
    const result = await AdviserModel.find({})
    return result;
}


const addNewAdviserIntoDB = async (blogData: TAdviser) => {
    const result = await AdviserModel.create(blogData);
    return result;
}


// delete Blog service
const deleteUnpublihedAdviserFromDB = async (blogId: string) => {
    const result = await AdviserModel.deleteOne({ _id: blogId, published: false })
    return result.deletedCount===1;
}




export const AdviserService = {
    getAllAdviserFromDB,
    addNewAdviserIntoDB,
    deleteUnpublihedAdviserFromDB
}