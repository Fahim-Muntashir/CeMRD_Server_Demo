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

// delete unpublishedResearch
const deleteUnpublishedResearch = async (req: Request, res: Response) => {
    const researchId = req.params.id;
    const result = await ResearchService.deleteUnpublihedResearchFromDB(researchId);

    if (result) {
        res.status(200).json({
            success: true,
            message:'Research is Deleted Successfully'
        }
        )
    } else {
        res.status(404).json({
            success: false,
            message:'Research not found or Already published'
        })
}
}

// Mark Research as Published

const markResearchAsPublished = async (req: Request, res: Response) => {
    const researchId = req.params.id;
    const result = await ResearchService.markResearchAsPublished(researchId);

    if (result) {
        res.status(200).json({
          success: true,
          message: 'Research is Marked as Published Successfully',
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Research not found or already published.',
        });
      }
}



export const ResearchController = {
    addResearch,
    deleteUnpublishedResearch,
    markResearchAsPublished
}