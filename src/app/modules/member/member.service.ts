import { MemberProfileModel } from "./member.model"


const getAllMemberProfileFromDB = async () => {
    const result = await MemberProfileModel.find({})
    return result;
}


const getSingleMemberProfile = async (profileId: any) => {
    const result =await MemberProfileModel.findById(profileId)
   return result;
}


export const MemberProfileService = {
    getAllMemberProfileFromDB,
    getSingleMemberProfile,
}