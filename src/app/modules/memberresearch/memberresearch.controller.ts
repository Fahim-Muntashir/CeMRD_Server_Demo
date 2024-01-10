import { Request, Response } from 'express';
import { MemberResearchService } from './memberresearch.service';

const postAResearch = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await MemberResearchService.postAResearch(data);
        res.status(200).json({
            success: true,
            message: "Your research is created",
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

const getAllResearchByUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const researchList = await MemberResearchService.getAllResearchByEmail(email);
        res.status(200).json({
            success: true,
            message: "Fetched research data by email",
            data: researchList,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

export const MemberResearchController = {
    postAResearch,
    getAllResearchByUser,
};
