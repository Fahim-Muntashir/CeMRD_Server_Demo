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
exports.EventController = void 0;
const event_service_1 = require("./event.service");
const getAllEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield event_service_1.EventService.getAllEventFromDB();
        res.status(200).json({
            success: true,
            message: "All event are Here",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newEvent = yield event_service_1.EventService.addNewEventIntoDB(data);
    res.status(200).json({
        success: true,
        message: 'Event is Created Successfully',
        data: newEvent,
    });
});
// delete deleteUnpublishedEvent
const deleteUnpublishedEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.id;
    const result = yield event_service_1.EventService.deleteUnpublihedEventFromDB(eventId);
    if (result) {
        res.status(200).json({
            success: true,
            message: 'Event is Deleted Successfully'
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Event not found or Already published'
        });
    }
});
exports.EventController = {
    getAllEvent,
    addEvent,
    deleteUnpublishedEvent,
};
