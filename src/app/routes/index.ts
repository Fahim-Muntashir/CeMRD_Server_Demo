import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ResearchRoutes } from "../modules/research/research.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { userAuthRoutes } from "../Auth/auth.route";
import { newsRoutes } from "../modules/news/news.routes";

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
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;