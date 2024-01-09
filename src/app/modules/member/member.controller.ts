import { Request, Response } from "express"
import { MemberProfileService } from "./member.service";


const getAllMemberProfile = async (req: Request, res: Response) => {
    try {
        const result = await MemberProfileService.getAllMemberProfileFromDB();
    
        res.status(200).json({
            success: true,
            message: "All Member are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}

const getSingleMemberProfile = async (req: Request, res: Response) => {
    const memberId = req.params.id;
    const singleMemberprofile = await MemberProfileService.getSingleMemberProfile(memberId);
    res.status(200).json({
        success: true,
        message: 'MemberProfile is get Successfully',
        data: singleMemberprofile,
    })
}
const updateMemberProfile = async (req: Request, res: Response) => {
    try {
        const memberId = req.params.id;
        const updatedFields = req.body; // Assuming the updated data is sent in the request body

        // Check if the profile exists
        const existingProfile = await MemberProfileService.getSingleMemberProfile(memberId);

        if (existingProfile) {
            // If the profile exists, update the fields
            const updatedProfile = await MemberProfileService.updateMemberProfile(memberId, updatedFields);

            res.status(200).json({
                success: true,
                message: 'MemberProfile updated successfully',
                data: updatedProfile,
            });
        } else {
            // If the profile doesn't exist, add a new profile
            const newProfile = await MemberProfileService.addNewMemberProfile(memberId, updatedFields);

            res.status(201).json({
                success: true,
                message: 'New MemberProfile added successfully',
                data: newProfile,
            });
        }
    } catch (err:any) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
};


export const MemberProfileController = {
    getAllMemberProfile,
    getSingleMemberProfile,updateMemberProfile
}