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
exports.ResearchController = void 0;
const research_service_1 = require("./research.service");
// 
const getAllResearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield research_service_1.ResearchService.getAllResearchFromDB();
        res.status(200).json({
            success: true,
            message: "all research are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleResearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const researchId = req.params.id;
    const singleResearch = yield research_service_1.ResearchService.getSingleResearch(researchId);
    res.status(200).json({
        success: true,
        message: 'Research is Created Successfully',
        data: singleResearch,
    });
});
const addResearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newResearch = yield research_service_1.ResearchService.addNewResearchIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Research is Created Successfully',
        data: newResearch,
    });
});
// delete unpublishedResearch
const deleteUnpublishedResearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const researchId = req.params.id;
    const result = yield research_service_1.ResearchService.deleteUnpublihedResearchFromDB(researchId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Research is Deleted Successfully'
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Research not found or Already published'
        });
    }
});
// Mark Research as Published
const markResearchAsPublished = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const researchId = req.params.id;
    const result = yield research_service_1.ResearchService.markResearchAsPublished(researchId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Research is Marked as Published Successfully',
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Research not found or already published.',
        });
    }
});
exports.ResearchController = {
    getAllResearch,
    getSingleResearch,
    addResearch,
    deleteUnpublishedResearch,
    markResearchAsPublished
};
