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
    const blogId = req.params.id;
    const singleResearch = await MemberProfileService.getSingleMemberProfile(blogId);
    res.status(200).json({
        success: true,
        message: 'MemberProfile is get Successfully',
        data: singleResearch,
    })
}


export const MemberProfileController = {
    getAllMemberProfile,
    getSingleMemberProfile,
}