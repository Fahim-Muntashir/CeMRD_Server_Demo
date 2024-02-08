"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("./event.controller");
const router = express_1.default.Router();
router.get('/allevent', event_controller_1.EventController.getAllEvent);
router.post('/addevent', event_controller_1.EventController.addEvent);
router.delete('/deleteevent/:id', event_controller_1.EventController.deleteUnpublishedEvent);
exports.eventRoutes = router;
