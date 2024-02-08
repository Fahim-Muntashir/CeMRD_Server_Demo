"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.get('/jwt/:email', auth_controller_1.AuthControllers.createJwt);
router.get('/users/role/:email', auth_controller_1.AuthControllers.userRole);
exports.userAuthRoutes = router;
