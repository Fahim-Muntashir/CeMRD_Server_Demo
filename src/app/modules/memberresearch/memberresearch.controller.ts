import { Request, Response } from 'express'

import { MemberResearchService } from './memberresearch.service';

const postAResearch = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await MemberResearchService.postAResearch(data);
        res.status(200).json({
            sucess: true,
            message: "your Research is Created",
            data:result
        })

    } catch (err) {
        console.log(err);
    }
}

export const MemberResearchController = {
    postAResearch,
}