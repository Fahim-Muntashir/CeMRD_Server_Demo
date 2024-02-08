"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const news_controller_1 = require("./news.controller");
const router = express_1.default.Router();
router.get('/allnews', news_controller_1.NewsController.getAllNews);
router.get('/singlenews/:id', news_controller_1.NewsController.getSingleNews);
router.post('/addnews', news_controller_1.NewsController.addNews);
router.delete('/deletenews/:id', news_controller_1.NewsController.deleteUnpublishedNews);
router.put('/markpublished/:id', news_controller_1.NewsController.markNewsAsPublished);
exports.newsRoutes = router;
