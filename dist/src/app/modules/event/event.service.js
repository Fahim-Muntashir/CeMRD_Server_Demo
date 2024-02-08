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
exports.EventService = void 0;
const event_model_1 = require("./event.model");
const getAllEventFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_model_1.EventModel.find({});
    return result;
});
const addNewEventIntoDB = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_model_1.EventModel.create(eventData);
    return result;
});
// delete Blog service
const deleteUnpublihedEventFromDB = (newsId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_model_1.EventModel.deleteOne({ _id: newsId, published: false });
    return result.deletedCount === 1;
});
exports.EventService = {
    getAllEventFromDB,
    addNewEventIntoDB,
    deleteUnpublihedEventFromDB,
};
