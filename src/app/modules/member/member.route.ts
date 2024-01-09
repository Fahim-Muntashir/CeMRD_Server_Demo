import express from 'express'
const router = express.Router();
import { MemberProfileController } from './member.controller';


router.get('/allmemberprofile',MemberProfileController.getAllMemberProfile)
router.get('/singlememberprofile', MemberProfileController.getSingleMemberProfile)
// router.put('/updatesinglememberprofile', MemberController.getAllMemberProfile)
router.put('/updatememberprofile/:email', MemberProfileController.updateMemberProfile);

router.get('/findmemberbyemail', MemberProfileController.findMemberByEmail); // Add this route
// Add this route

export const MemberProfileRoutes = router;