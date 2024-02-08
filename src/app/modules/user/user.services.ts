import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async(user: TUser) => {
   const result= await UserModel.create(user);
    return result;
}

const getAllUserFromDB = async () => {
    const result = await UserModel.find({})
    return result;
}

const getSingleUserFromDB = async (id: string) => {
    const result = await UserModel.findOne({ _id: id });
    console.log(result);
    return result;
}
const searchUsers = async (searchQuery:any) => {
    const result = await UserModel.find({ email: { $regex: searchQuery, $options: "i" } });
    return result;
  };

// update user role into db

const updateUserRoleInDB = async (id: string, newRole: string) => {
    try {
        // Use findOneAndUpdate to find the user with the given userId and update only the role
        await UserModel.updateOne({ _id: id }, { role: newRole });

    } catch (error) {
        console.error("Error updating user role in the database:", error);
        throw error;
    }
}


const deleteUserFromDB = async (id: number) => {
    const result = await UserModel.findOneAndDelete({ userId: id })
    return result;
}

export const UserServices = {
    createUser,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateUserRoleInDB,
    deleteUserFromDB,searchUsers
}