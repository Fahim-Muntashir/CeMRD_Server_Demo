import httpStatus from "http-status";

import { AuthServices } from "./auth.service";
import sendResponse from "../utils/sendResponse";
import catchAsync from "../utils/catchAsync";

const createJwt = catchAsync(async (req, res) => {

    const email = req.params.email;
    const result = await AuthServices.createJwt({email});

    sendResponse(res, {
          statusCode:httpStatus.OK,
        success: true,
        message: 'User is login succesfully',
        data: result,
    })
})

const userRole = catchAsync(async (req, res) => {
    const email = req.params.email;
    const result = await AuthServices.roleCheck({email});
   sendResponse(res, {
          statusCode:httpStatus.OK,
        success: true,
        message: 'Yea, This User is Admin',
        data: result,
    })
})

export const AuthControllers = {
    createJwt,
    userRole
}