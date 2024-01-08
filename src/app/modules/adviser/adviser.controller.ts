import { Request, Response } from "express"
import { AdviserService } from "./adviser.service";




const getAllAdviser = async (req: Request, res: Response) => {
    try {
        const result = await AdviserService.getAllAdviserFromDB();
    
        res.status(200).json({
            success: true,
            message: "All Adviser are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}



const addAdviser = async(req:Request,res:Response) => {
    const data = req.body;
    const newAdviser = await AdviserService.addNewAdviserIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Adiser is Created Successfully',
        data: newAdviser,
    })

}

// delete unpublishedAdviser
const deleteUnpublishedAdviser = async (req: Request, res: Response) => {
    const adviserId = req.params.id;
    const result = await AdviserService.deleteUnpublihedAdviserFromDB(adviserId);

    if (result) {
        res.status(200).json({
            success: true,
            message:'Adviser is Deleted Successfully'
        }
        )
    } else {
        res.status(404).json({
            success: false,
            message:'Adviser not found or Already published'
        })
}
}



export const AdviserController = {
    getAllAdviser,
    addAdviser,
    deleteUnpublishedAdviser,
}