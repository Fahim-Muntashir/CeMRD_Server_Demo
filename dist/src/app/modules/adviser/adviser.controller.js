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
exports.AdviserController = void 0;
const adviser_service_1 = require("./adviser.service");
const getAllAdviser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield adviser_service_1.AdviserService.getAllAdviserFromDB();
        res.status(200).json({
            success: true,
            message: "All Adviser are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const addAdviser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newAdviser = yield adviser_service_1.AdviserService.addNewAdviserIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Adiser is Created Successfully',
        data: newAdviser,
    });
});
// delete unpublishedAdviser
const deleteUnpublishedAdviser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adviserId = req.params.id;
    const result = yield adviser_service_1.AdviserService.deleteUnpublihedAdviserFromDB(adviserId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Adviser is Deleted Successfully'
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Adviser not found or Already published'
        });
    }
});
exports.AdviserController = {
    getAllAdviser,
    addAdviser,
    deleteUnpublishedAdviser,
};
