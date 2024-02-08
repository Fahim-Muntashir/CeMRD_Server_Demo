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
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(user);
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find({});
    return result;
});
const getSingleUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ _id: id });
    console.log(result);
    return result;
});
const searchUsers = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find({ email: { $regex: searchQuery, $options: "i" } });
    return result;
});
// update user role into db
const updateUserRoleInDB = (id, newRole) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use findOneAndUpdate to find the user with the given userId and update only the role
        yield user_model_1.UserModel.updateOne({ _id: id }, { role: newRole });
    }
    catch (error) {
        console.error("Error updating user role in the database:", error);
        throw error;
    }
});
const deleteUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOneAndDelete({ userId: id });
    return result;
});
exports.UserServices = {
    createUser,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateUserRoleInDB,
    deleteUserFromDB, searchUsers
};
