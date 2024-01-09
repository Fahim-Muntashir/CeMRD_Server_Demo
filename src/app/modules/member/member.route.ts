import express from 'express'
const router = express.Router();
import { MemberController } from './member.controller';


router.get('/allmemberprofile',MemberController.getAllMemberProfile)
router.get('/singlememberprofile', MemberController.getAllMemberProfile)
router.put('/updatesinglememberprofile', MemberController.getAllMemberProfile)

export const MemberProfileRoutes = router;