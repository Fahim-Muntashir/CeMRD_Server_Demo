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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'faculty'],
        default: "user",
        required: true,
    },
});
userSchema.statics.isUserExistsByUserEmail = function (useremail) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = { email: new RegExp(`^${useremail}$`, 'i') };
        console.log('MongoDB Query:', query);
        return yield exports.UserModel.findOne(query);
    });
};
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
