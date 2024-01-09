import express from 'express'
const router = express.Router();
import { MemberProfileController } from './member.controller';


router.get('/allmemberprofile',MemberProfileController.getAllMemberProfile)
router.get('/singlememberprofile', MemberProfileController.getSingleMemberProfile)
// router.put('/updatesinglememberprofile', MemberController.getAllMemberProfile)

export const MemberProfileRoutes = router;