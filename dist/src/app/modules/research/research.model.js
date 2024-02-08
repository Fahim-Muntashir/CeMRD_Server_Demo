"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchModel = void 0;
const mongoose_1 = require("mongoose");
const researchSchema = new mongoose_1.Schema({
    researchImg: {
        type: String,
        required: true
    },
    challangeTitle: {
        type: String,
        required: true,
    },
    challangeDescription: {
        type: String,
        required: true,
    },
    responseTitle: {
        type: String,
        required: true,
    },
    responseDescription: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    }
});
exports.ResearchModel = (0, mongoose_1.model)('Research', researchSchema);
