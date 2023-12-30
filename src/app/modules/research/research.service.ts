import { TResearch } from "./research.interface"
import { ResearchModel } from "./research.model"

const addNewResearchIntoDB = async (researchData: TResearch) => {
    const result = await ResearchModel.create(researchData);
    return result;
}

export const ResearchService = {
    addNewResearchIntoDB
}