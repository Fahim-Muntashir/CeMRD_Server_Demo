import { Schema, model, } from "mongoose";
import { TUser, UserModels } from "./user.interface";



const userSchema = new Schema<TUser>({
    email: {
      type: String,
      required: true,
  },
  name: {
    type: String,
    required:true,
  },
  profileURL:{
    type: String,
  },
    role: {
      type: String,
      enum: ['admin', 'user', 'faculty'], // Use the TUserRole values as the enum
      default:"user",
      required: true,
    },
});
  
userSchema.statics.isUserExistsByUserEmail = async function (useremail: string) {
  const query = { email: new RegExp(`^${useremail}$`, 'i') };
  console.log('MongoDB Query:', query);
  return await UserModel.findOne(query);
};


export const UserModel = model<TUser,UserModels>('User', userSchema);