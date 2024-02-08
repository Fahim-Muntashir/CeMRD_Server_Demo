"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberResearchModel = void 0;
const mongoose_1 = require("mongoose");
const MemberResearchSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});
exports.MemberResearchModel = (0, mongoose_1.model)('MemberResearch', MemberResearchSchema);
