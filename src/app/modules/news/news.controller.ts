import { Request, Response } from "express"
import { NewsService } from "./news.service";




const getAllNews = async (req: Request, res: Response) => {
    try {
        const result = await NewsService.getAllNewsFromDB();
    
        res.status(200).json({
            success: true,
            message: "All news are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}

const getSingleNews = async (req: Request, res: Response) => {
    const newsId = req.params.id;
    const singleResearch = await NewsService.getSingleNews(newsId);
    res.status(200).json({
        success: true,
        message: 'news is get Successfully',
        data: singleResearch,
    })
}




const addNews = async(req:Request,res:Response) => {
    const data = req.body;
    const newnews = await NewsService.addNewNewsIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'news is Created Successfully',
        data: newnews,
    })

}

// delete unpublishednews
const deleteUnpublishedNews = async (req: Request, res: Response) => {
    const newsId = req.params.id;
    const result = await NewsService.deleteUnpublihedNewsFromDB(newsId);

    if (result) {
        res.status(200).json({
            success: true,
            message:'news is Deleted Successfully'
        }
        )
    } else {
        res.status(404).json({
            success: false,
            message:'news not found or Already published'
        })
}
}

// Mark news as Published

const markNewsAsPublished = async (req: Request, res: Response) => {
    const newsId = req.params.id;
    const result = await NewsService.markNewsAsPublished(newsId);

    if (result) {
        res.status(200).json({
          success: true,
          message: 'news is Marked as Published Successfully',
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'news not found or already published.',
        });
      }
}



export const NewsController = {
    getAllNews,
    getSingleNews,
    addNews,
    deleteUnpublishedNews,
    markNewsAsPublished
}