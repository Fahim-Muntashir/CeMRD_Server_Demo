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
exports.ResearchService = void 0;
const research_model_1 = require("./research.model");
const getAllResearchFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield research_model_1.ResearchModel.find({});
    return result;
});
const getSingleResearch = (researchId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield research_model_1.ResearchModel.findById(researchId);
    return result;
});
const addNewResearchIntoDB = (researchData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield research_model_1.ResearchModel.create(researchData);
    return result;
});
// delete research service
const deleteUnpublihedResearchFromDB = (researchId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield research_model_1.ResearchModel.deleteOne({ _id: researchId });
    return result.deletedCount === 1;
});
// Mark research as Published
const markResearchAsPublished = (researchId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield research_model_1.ResearchModel.updateOne({ _id: researchId }, { published: true });
    return result.modifiedCount > 0;
});
exports.ResearchService = {
    getAllResearchFromDB,
    getSingleResearch,
    addNewResearchIntoDB,
    deleteUnpublihedResearchFromDB,
    markResearchAsPublished
};
