import { Schema, model, } from "mongoose";
import { TUser } from "./user.interface";



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
  
export const UserModel = model<TUser>('User', userSchema);