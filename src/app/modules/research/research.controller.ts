import { Request, Response } from "express"
import { ResearchService } from "./research.service";

const addResearch = async(req:Request,res:Response) => {
    const data = req.body;
    const newResearch = await ResearchService.addNewResearchIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Research is Created Successfully',
        data: newResearch,
    })

}

export const ResearchController = {
    addResearch
}