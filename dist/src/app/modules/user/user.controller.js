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
exports.UserControllers = void 0;
const user_services_1 = require("./user.services");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(user);
        const result = yield user_services_1.UserServices.createUser(user);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        const result = search
            ? yield user_services_1.UserServices.searchUsers(search.toString())
            : yield user_services_1.UserServices.getAllUserFromDB();
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_services_1.UserServices.getSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: "User Sigle Man Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const makeFaqulty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        // Check if the user exists
        const existingUser = yield user_services_1.UserServices.getSingleUserFromDB(userId);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
        console.log(existingUser);
        // Update the user's role to "facuty" in the database
        yield user_services_1.UserServices.updateUserRoleInDB(userId, 'faculty');
        return res.status(200).json({
            success: true,
            message: "User role updated to faculty",
            data: null,
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
        });
    }
});
// Delete Faqulty
const deleteFaqulty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        // Check if the user exists
        const existingUser = yield user_services_1.UserServices.getSingleUserFromDB(userId);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
        console.log(existingUser);
        // Update the user's role to "facuty" in the database
        yield user_services_1.UserServices.updateUserRoleInDB(userId, 'user');
        return res.status(200).json({
            success: true,
            message: "Faqulty role updated to faculty",
            data: null,
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userIdNum = parseInt(userId);
        // if the user exists 
        const existingUser = yield user_services_1.UserServices.getSingleUserFromDB(userId);
        if (!existingUser) {
            res.status(404).json({
                success: false,
                message: "This User not Found",
                data: null,
            });
        }
        const result = yield user_services_1.UserServices.deleteUserFromDB(userIdNum);
        res.status(200).json({
            success: true,
            message: "user is deleted successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.UserControllers = {
    createUser,
    deleteFaqulty,
    getAllUser,
    getSingleUser,
    deleteUser,
    makeFaqulty,
};
