import { Request, Response } from "express"
import { BlogService } from "./blog.service";

const addBlog = async(req:Request,res:Response) => {
    const data = req.body;
    const newBlog = await BlogService.addNewBlogIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Blog is Created Successfully',
        data: newBlog,
    })

}

// delete unpublishedBlog
const deleteUnpublishedBlog = async (req: Request, res: Response) => {
    const blogId = req.params.id;
    const result = await BlogService.deleteUnpublihedBlogFromDB(blogId);

    if (result) {
        res.status(200).json({
            success: true,
            message:'Blog is Deleted Successfully'
        }
        )
    } else {
        res.status(404).json({
            success: false,
            message:'Blog not found or Already published'
        })
}
}

// Mark Blog as Published

const markBlogAsPublished = async (req: Request, res: Response) => {
    const blogId = req.params.id;
    const result = await BlogService.markBlogAsPublished(blogId);

    if (result) {
        res.status(200).json({
          success: true,
          message: 'Blog is Marked as Published Successfully',
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Blog not found or already published.',
        });
      }
}



export const BlogController = {
    addBlog,
    deleteUnpublishedBlog,
    markBlogAsPublished
}