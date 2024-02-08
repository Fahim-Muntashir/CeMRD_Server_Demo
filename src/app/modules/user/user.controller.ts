import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
   
    try {
        const user = req.body;
        console.log(user);
        const result = await UserServices.createUser(user);

        console.log(result);
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data:result,
        })
    } catch (err) {
        console.log(err);
    }
};  


const getAllUser = async (req: Request, res: Response) => {
    try {
      const { search } = req.query;
      const result = search
        ? await UserServices.searchUsers(search.toString())
        : await UserServices.getAllUserFromDB();
  
      res.status(200).json({
        success: true,
        message: "Users are Here",
        data: result,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data: null,
      });
    }
};
  
const getSingleUser = async (req: Request, res: Response) => {
    try {

        const { userId } = req.params;
        
        const result = await UserServices.getSingleUserFromDB(userId);
    
        res.status(200).json({
            success: true,
            message: "User Sigle Man Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}


const makeFaqulty = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        // Check if the user exists
        const existingUser = await UserServices.getSingleUserFromDB(userId);
        
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }

        console.log(existingUser);

        // Update the user's role to "facuty" in the database
        await UserServices.updateUserRoleInDB(userId, 'faculty');

        return res.status(200).json({
            success: true,
            message: "User role updated to faculty",
            data: null,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
        });
    }
}

// Delete Faqulty

const deleteFaqulty = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        // Check if the user exists
        const existingUser = await UserServices.getSingleUserFromDB(userId);
        
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }

        console.log(existingUser);

        // Update the user's role to "facuty" in the database
        await UserServices.updateUserRoleInDB(userId, 'user');

        return res.status(200).json({
            success: true,
            message: "Faqulty role updated to faculty",
            data: null,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
        });
    }
}




const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userIdNum = parseInt(userId);

        // if the user exists 
        const existingUser = await UserServices.getSingleUserFromDB(userId);

        if (!existingUser) {
            res.status(404).json({
                success: false,
                message: "This User not Found",
                data:null,
            })
        }


        const result = await UserServices.deleteUserFromDB(userIdNum);

        res.status(200).json({
            success: true,
            message: "user is deleted successfully",
            data:result,
        })

    } catch (err) {
        console.log(err);
    }
}

export const UserControllers = {
    createUser,
    deleteFaqulty,
    getAllUser,
    getSingleUser,
    deleteUser,
    makeFaqulty,
} 