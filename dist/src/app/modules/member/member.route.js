"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const member_controller_1 = require("./member.controller");
router.get('/allmemberprofile', member_controller_1.MemberProfileController.getAllMemberProfile);
router.get('/singlememberprofile', member_controller_1.MemberProfileController.getSingleMemberProfile);
// router.put('/updatesinglememberprofile', MemberController.getAllMemberProfile)
router.put('/updatememberprofile/:email', member_controller_1.MemberProfileController.updateMemberProfile);
router.get('/findmemberbyemail', member_controller_1.MemberProfileController.findMemberByEmail); // Add this route
// Add this route
exports.MemberProfileRoutes = router;
