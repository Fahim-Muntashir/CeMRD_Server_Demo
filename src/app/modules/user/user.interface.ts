import { Model } from "mongoose";

export type TUserRole = 'admin' | 'user' | 'faculty';

export type TUser = {
    email: string;
    name: string;
    profileURL: string;
    role: TUserRole;
}

export interface UserModels extends Model<TUser>{
    // myStaticMethod(): number;
    isUserExistsByUserEmail(username: string): Promise<TUser>
}
