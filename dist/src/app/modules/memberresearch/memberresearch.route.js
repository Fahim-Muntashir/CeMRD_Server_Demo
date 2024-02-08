"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberResearchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const memberresearch_controller_1 = require("./memberresearch.controller");
const router = express_1.default.Router();
router.post('/postresearch', memberresearch_controller_1.MemberResearchController.postAResearch);
router.get('/getresearch/:email', memberresearch_controller_1.MemberResearchController.getAllResearchByUser);
exports.MemberResearchRoutes = router;
