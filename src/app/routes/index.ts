import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ResearchRoutes } from "../modules/research/research.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { userAuthRoutes } from "../Auth/auth.route";
import { newsRoutes } from "../modules/news/news.routes";
import { AdviserRoutes } from "../modules/adviser/adviser.route";
import { MemberProfileRoutes } from "../modules/member/member.route";
import { eventRoutes } from "../modules/event/event.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route:UserRoutes,
    },
    {
        path: '/research',
        route:ResearchRoutes
    },
    {
        path: '/blog',
        route:BlogRoutes
    }, {
        path: '/auth',
        route:userAuthRoutes
    
    }, {
        path: '/news',
        route:newsRoutes
    }, {
        path: '/adviser',
        route:AdviserRoutes
    }, {
        path: '/member',
        route:MemberProfileRoutes
    }, {
        path: '/event',
        route:eventRoutes,
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;