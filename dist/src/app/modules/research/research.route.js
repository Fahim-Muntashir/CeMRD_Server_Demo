"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const research_controller_1 = require("./research.controller");
const router = express_1.default.Router();
router.get('/allresearch', research_controller_1.ResearchController.getAllResearch);
router.get('/singleresearch/:id', research_controller_1.ResearchController.getSingleResearch);
router.post('/addresearch', research_controller_1.ResearchController.addResearch);
router.delete('/deleteresearch/:id', research_controller_1.ResearchController.deleteUnpublishedResearch);
router.put('/markpublished/:id', research_controller_1.ResearchController.markResearchAsPublished);
exports.ResearchRoutes = router;
