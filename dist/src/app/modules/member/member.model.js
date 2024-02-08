"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberProfileModel = void 0;
const mongoose_1 = require("mongoose");
const memberProfileSchema = new mongoose_1.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    googleScholar: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    }
});
exports.MemberProfileModel = (0, mongoose_1.model)('MemberProfile', memberProfileSchema);
