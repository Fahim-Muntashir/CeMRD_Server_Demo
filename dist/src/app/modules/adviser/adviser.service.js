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
exports.AdviserService = void 0;
const adviser_model_1 = require("./adviser.model");
const getAllAdviserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adviser_model_1.AdviserModel.find({});
    return result;
});
const addNewAdviserIntoDB = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adviser_model_1.AdviserModel.create(blogData);
    return result;
});
// delete Blog service
const deleteUnpublihedAdviserFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adviser_model_1.AdviserModel.deleteOne({ _id: blogId, published: false });
    return result.deletedCount === 1;
});
exports.AdviserService = {
    getAllAdviserFromDB,
    addNewAdviserIntoDB,
    deleteUnpublihedAdviserFromDB
};
