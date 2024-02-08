import { MemberProfileModel } from "./member.model"


const getAllMemberProfileFromDB = async () => {
    const result = await MemberProfileModel.find({})
    return result;
}


const getSingleMemberProfile = async (email: string) => {
    const result = await MemberProfileModel.findOne({ email });
    return result;
};

const updateMemberProfile = async (email: any, updatedFields: any) => {
    const updatedProfile = await MemberProfileModel.findOneAndUpdate({ email }, updatedFields, { new: true });
    return updatedProfile;
};


const addNewMemberProfile = async (email: any, newProfileFields: any) => {
    const newProfile = await MemberProfileModel.create({ email, ...newProfileFields });
    return newProfile;
};

const findMemberByEmail = async (email: string) => {
    const memberProfile = await MemberProfileModel.findOne({ email }); // Assuming email is a field in your member profile schema
    return memberProfile;
};


export const MemberProfileService = {
    getAllMemberProfileFromDB,
    getSingleMemberProfile,updateMemberProfile,
    addNewMemberProfile,
    findMemberByEmail,
}