"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../modules/user/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJwt = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Payload Email:', payload.email);
    try {
        // Attempt to find the user
        const user = yield user_model_1.UserModel.isUserExistsByUserEmail(payload.email.trim());
        // If user doesn't exist, throw an error
        if (!user) {
            throw new Error("User does not exist");
        }
        // Create token and send to client
        const jwtPayload = {
            useremail: user.email,
            role: user.role,
        };
        const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.access_token_secret, {
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
    }
    catch (error) {
        // Log any errors
        console.error('Error during authentication:', error);
        throw error; // Re-throw the error to maintain consistent error handling
    }
});
const roleCheck = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Payload Email:', payload.email);
    try {
        const user = yield user_model_1.UserModel.isUserExistsByUserEmail(payload.email.trim());
        return user.role;
    }
    catch (error) {
        console.log(error, "During the admin check");
    }
});
exports.AuthServices = {
    createJwt,
    roleCheck
};
