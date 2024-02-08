"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdviserModel = void 0;
const mongoose_1 = require("mongoose");
const AdviserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
    },
    name: {
        type: String,
        reqiured: true
    },
    position: {
        type: String,
        required: true,
    },
    imgLink: {
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
    }
});
exports.AdviserModel = (0, mongoose_1.model)('Adviser', AdviserSchema);
