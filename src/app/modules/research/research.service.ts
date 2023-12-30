import { TResearch } from "./research.interface"
import { ResearchModel } from "./research.model"

const addNewResearchIntoDB = async (researchData: TResearch) => {
    const result = await ResearchModel.create(researchData);
    return result;
}

const deleteUnpublihedResearchFromDB = async (researchId: string) => {
    const result = await ResearchModel.deleteOne({ _id: researchId, published: false })
    return result.deletedCount===1;
}

export const ResearchService = {
    addNewResearchIntoDB,
    deleteUnpublihedResearchFromDB
}