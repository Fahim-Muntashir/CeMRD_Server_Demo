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
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // token sending dor or die
        const token = req.headers.authorization;
        console.log("token get successfully", token);
        if (!token) {
            throw new Error("Token does not Exists 🤣(●'◡'●)");
        }
        // Check Token
        jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret, function (err, decoded) {
            if (err) {
                throw new Error('You dont have any permission');
            }
            const role = decoded.role;
            // Role Access Checking 
            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new Error("You dont have any Permission");
            }
            // decoded undefined
            decoded;
            next();
        });
    }));
};
exports.default = auth;
