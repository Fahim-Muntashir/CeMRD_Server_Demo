import { TMemberResearch } from "./memberresearch.interface";
import { MemberResearchModel } from "./memberresearch.model";

const postAResearch = async (researchData: TMemberResearch) => {
    const result = await MemberResearchModel.create(researchData);
    return result;
}

const getAllResearchByEmail = async (email: string) => {
    const researchList = await MemberResearchModel.find({ email });
    return researchList;
}

export const MemberResearchService = {
    postAResearch,
    getAllResearchByEmail,
}
