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
exports.MemberProfileController = void 0;
const member_service_1 = require("./member.service");
const getAllMemberProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.MemberProfileService.getAllMemberProfileFromDB();
        res.status(200).json({
            success: true,
            message: "All Member are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleMemberProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.id;
    const singleMemberprofile = yield member_service_1.MemberProfileService.getSingleMemberProfile(memberId);
    res.status(200).json({
        success: true,
        message: 'MemberProfile is get Successfully',
        data: singleMemberprofile,
    });
});
const updateMemberProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const updatedFields = req.body; // Assuming the updated data is sent in the request body
        // Check if the profile exists
        const existingProfile = yield member_service_1.MemberProfileService.getSingleMemberProfile(email);
        if (existingProfile) {
            // If the profile exists, update the fields
            const updatedProfile = yield member_service_1.MemberProfileService.updateMemberProfile(email, updatedFields);
            res.status(200).json({
                success: true,
                message: 'MemberProfile updated successfully',
                data: updatedProfile,
            });
        }
        else {
            // If the profile doesn't exist, add a new profile
            const newProfile = yield member_service_1.MemberProfileService.addNewMemberProfile(email, updatedFields);
            res.status(201).json({
                success: true,
                message: 'New MemberProfile added successfully',
                data: newProfile,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
});
// FInd Member using mail
const findMemberByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        // Check if the profile exists
        const memberProfile = yield member_service_1.MemberProfileService.findMemberByEmail(email);
        if (memberProfile) {
            res.status(200).json({
                success: true,
                message: 'MemberProfile found successfully',
                data: memberProfile,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'MemberProfile not found',
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
});
exports.MemberProfileController = {
    getAllMemberProfile,
    getSingleMemberProfile,
    updateMemberProfile,
    findMemberByEmail
};
