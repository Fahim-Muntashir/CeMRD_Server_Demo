import { TMemberResearch } from "./memberresearch.interface"
import { MemberResearchModel } from "./memberresearch.model"

const postAResearch = async (researchData:TMemberResearch) => {
    const result = await MemberResearchModel.create(researchData);
    return result;
}

export const MemberResearchService = {
    postAResearch,
}