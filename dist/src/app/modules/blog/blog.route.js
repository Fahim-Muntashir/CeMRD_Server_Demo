"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.get('/allblog', blog_controller_1.BlogController.getAllBlog);
router.get('/singleblog/:id', blog_controller_1.BlogController.getSingleBlog);
router.post('/addblog', blog_controller_1.BlogController.addBlog);
router.delete('/deleteblog/:id', blog_controller_1.BlogController.deleteUnpublishedBlog);
router.put('/markpublished/:id', blog_controller_1.BlogController.markBlogAsPublished);
exports.BlogRoutes = router;
