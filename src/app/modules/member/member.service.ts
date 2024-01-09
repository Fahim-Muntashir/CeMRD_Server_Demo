import { MemberProfileModel } from "./member.model"


const getAllMemberProfileFromDB = async () => {
    const result = await MemberProfileModel.find({})
    return result;
}


const getSingleMemberProfile = async (profileId: any) => {
    const result =await MemberProfileModel.findById(profileId)
   return result;
}


const updateMemberProfile = async (profileId: any, updatedFields: any) => {
    const updatedProfile = await MemberProfileModel.findByIdAndUpdate(profileId, updatedFields, { new: true });
    return updatedProfile;
};

const addNewMemberProfile = async (profileId: any, newProfileFields: any) => {
    const newProfile = await MemberProfileModel.create({ _id: profileId, ...newProfileFields });
    return newProfile;
};

export const MemberProfileService = {
    getAllMemberProfileFromDB,
    getSingleMemberProfile,updateMemberProfile,
    addNewMemberProfile,
}