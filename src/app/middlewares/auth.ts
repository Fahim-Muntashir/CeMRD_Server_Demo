import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import jwt,{JwtPayload} from 'jsonwebtoken';


const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        // token sending dor or die
        const token = req.headers.authorization;

  
        console.log("token get successfully",token);
        
        if (!token) {
            throw new Error("Token does not Exists 🤣(●'◡'●)")
        }

        // Check Token

        jwt.verify(token, config.access_token_secret as string, function (err, decoded) {
            if (err) {
                throw new Error('You dont have any permission')
            }

            const role = (decoded as JwtPayload).role;



            // Role Access Checking 
            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new Error("You dont have any Permission")
            }

            // decoded undefined
            decoded as JwtPayload
           
            next();
        })


    })
    
}

export default auth;