import { TResearch } from "./research.interface"
import { ResearchModel } from "./research.model"


const getAllResearchFromDB = async () => {
    const result = await ResearchModel.find({})
    return result;
}


const getSingleResearch = async (researchId: any) => {
    const result =await ResearchModel.findById(researchId)
   return result;
}

const addNewResearchIntoDB = async (researchData: TResearch) => {
    const result = await ResearchModel.create(researchData);
    return result;
}


// delete research service
const deleteUnpublihedResearchFromDB = async (researchId: string) => {
    const result = await ResearchModel.deleteOne({ _id: researchId })
    return result.deletedCount===1;
}


// Mark research as Published
const markResearchAsPublished = async (researchId: string) => {
    const result = await ResearchModel.updateOne({ _id: researchId}, { published: true });

    return result.modifiedCount > 0;
}


export const ResearchService = {
    getAllResearchFromDB,
    getSingleResearch,
    addNewResearchIntoDB,
    deleteUnpublihedResearchFromDB,
    markResearchAsPublished
}