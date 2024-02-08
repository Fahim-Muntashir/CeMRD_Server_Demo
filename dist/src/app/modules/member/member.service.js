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
exports.MemberProfileService = void 0;
const member_model_1 = require("./member.model");
const getAllMemberProfileFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.MemberProfileModel.find({});
    return result;
});
const getSingleMemberProfile = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.MemberProfileModel.findOne({ email });
    return result;
});
const updateMemberProfile = (email, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProfile = yield member_model_1.MemberProfileModel.findOneAndUpdate({ email }, updatedFields, { new: true });
    return updatedProfile;
});
const addNewMemberProfile = (email, newProfileFields) => __awaiter(void 0, void 0, void 0, function* () {
    const newProfile = yield member_model_1.MemberProfileModel.create(Object.assign({ email }, newProfileFields));
    return newProfile;
});
const findMemberByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const memberProfile = yield member_model_1.MemberProfileModel.findOne({ email }); // Assuming email is a field in your member profile schema
    return memberProfile;
});
exports.MemberProfileService = {
    getAllMemberProfileFromDB,
    getSingleMemberProfile, updateMemberProfile,
    addNewMemberProfile,
    findMemberByEmail,
};
