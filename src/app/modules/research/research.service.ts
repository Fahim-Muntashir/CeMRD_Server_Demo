import { TResearch } from "./research.interface"
import { ResearchModel } from "./research.model"

const addNewResearchIntoDB = async (researchData: TResearch) => {
    const result = await ResearchModel.create(researchData);
    return result;
}


// delete research service
const deleteUnpublihedResearchFromDB = async (researchId: string) => {
    const result = await ResearchModel.deleteOne({ _id: researchId, published: false })
    return result.deletedCount===1;
}


// Mark research as Published
const markResearchAsPublished = async (researchId: string) => {
    const result = await ResearchModel.updateOne({ _id: researchId, published: false }, { published: true });

    return result.modifiedCount > 0;
}


export const ResearchService = {
    addNewResearchIntoDB,
    deleteUnpublihedResearchFromDB,
    markResearchAsPublished
}