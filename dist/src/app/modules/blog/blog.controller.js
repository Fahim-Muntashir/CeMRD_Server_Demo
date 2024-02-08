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
exports.BlogController = void 0;
const blog_service_1 = require("./blog.service");
const getAllBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogService.getAllBlogFromDB();
        res.status(200).json({
            success: true,
            message: "All Blog are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const singleResearch = yield blog_service_1.BlogService.getSingleBlog(blogId);
    res.status(200).json({
        success: true,
        message: 'Blog is get Successfully',
        data: singleResearch,
    });
});
const addBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newBlog = yield blog_service_1.BlogService.addNewBlogIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Blog is Created Successfully',
        data: newBlog,
    });
});
// delete unpublishedBlog
const deleteUnpublishedBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const result = yield blog_service_1.BlogService.deleteUnpublihedBlogFromDB(blogId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Blog is Deleted Successfully'
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Blog not found or Already published'
        });
    }
});
// Mark Blog as Published
const markBlogAsPublished = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const result = yield blog_service_1.BlogService.markBlogAsPublished(blogId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Blog is Marked as Published Successfully',
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Blog not found or already published.',
        });
    }
});
exports.BlogController = {
    getAllBlog,
    getSingleBlog,
    addBlog,
    deleteUnpublishedBlog,
    markBlogAsPublished
};
