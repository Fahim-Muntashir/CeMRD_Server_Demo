import config from "../config";
import { UserModel } from "../modules/user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
const createJwt = async (payload: TLoginUser) => {
    console.log('Payload Email:', payload.email);

    try {
        // Attempt to find the user
        const user = await UserModel.isUserExistsByUserEmail(payload.email.trim());

        // If user doesn't exist, throw an error
        if (!user) {
            throw new Error("User does not exist");
        }

        // Create token and send to client
        const jwtPayload = {
            useremail: user.email,
            role: user.role,
        };

        const accessToken = jwt.sign(jwtPayload, config.access_token_secret as string, {
            expiresIn: '5d'
        });

        return {
            user: {
                username: user.name,
                email: user.email,
                role: user.role,
            },
            token: accessToken
        };
    } catch (error) {
        // Log any errors
        console.error('Error during authentication:', error);
        throw error; // Re-throw the error to maintain consistent error handling
    }
};


const roleCheck= async(payload:TLoginUser) => {
    console.log('Payload Email:', payload.email);
    try {
        const user = await UserModel.isUserExistsByUserEmail(payload.email.trim());

      return user.role;

    } catch (error) {
        console.log(error,"During the admin check");
    }
}


export const AuthServices = {
    createJwt,
    roleCheck
};
