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
exports.MemberResearchController = void 0;
const memberresearch_service_1 = require("./memberresearch.service");
const postAResearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield memberresearch_service_1.MemberResearchService.postAResearch(data);
        res.status(200).json({
            success: true,
            message: "Your research is created",
            data: result
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
const getAllResearchByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const researchList = yield memberresearch_service_1.MemberResearchService.getAllResearchByEmail(email);
        res.status(200).json({
            success: true,
            message: "Fetched research data by email",
            data: researchList,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
exports.MemberResearchController = {
    postAResearch,
    getAllResearchByUser,
};
