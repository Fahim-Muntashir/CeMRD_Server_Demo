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
exports.NewsService = void 0;
const news_model_1 = require("./news.model");
const getAllNewsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.NewsModel.find({});
    return result;
});
const getSingleNews = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.NewsModel.findById(blogId);
    return result;
});
const addNewNewsIntoDB = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.NewsModel.create(blogData);
    return result;
});
// delete Blog service
const deleteUnpublihedNewsFromDB = (newsId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.NewsModel.deleteOne({ _id: newsId, published: false });
    return result.deletedCount === 1;
});
// Mark Blog as Published
const markNewsAsPublished = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.NewsModel.updateOne({ _id: blogId, }, { published: true });
    return result.modifiedCount > 0;
});
exports.NewsService = {
    getAllNewsFromDB,
    getSingleNews,
    addNewNewsIntoDB,
    deleteUnpublihedNewsFromDB,
    markNewsAsPublished
};
