"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchModel = void 0;
const mongoose_1 = require("mongoose");
const researchSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    vanue: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    }
});
exports.ResearchModel = (0, mongoose_1.model)('Research', researchSchema);
