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
exports.BlogService = void 0;
const blog_model_1 = require("./blog.model");
const getAllBlogFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.find({});
    return result;
});
const getSingleBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.findById(blogId);
    return result;
});
const addNewBlogIntoDB = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.create(blogData);
    return result;
});
// delete Blog service
const deleteUnpublihedBlogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.deleteOne({ _id: blogId, published: false });
    return result.deletedCount === 1;
});
// Mark Blog as Published
const markBlogAsPublished = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.updateOne({ _id: blogId, }, { published: true });
    return result.modifiedCount > 0;
});
exports.BlogService = {
    getAllBlogFromDB,
    getSingleBlog,
    addNewBlogIntoDB,
    deleteUnpublihedBlogFromDB,
    markBlogAsPublished
};
