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
exports.MemberResearchService = void 0;
const memberresearch_model_1 = require("./memberresearch.model");
const postAResearch = (researchData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield memberresearch_model_1.MemberResearchModel.create(researchData);
    return result;
});
const getAllResearchByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const researchList = yield memberresearch_model_1.MemberResearchModel.find({ email });
    return researchList;
});
exports.MemberResearchService = {
    postAResearch,
    getAllResearchByEmail,
};
