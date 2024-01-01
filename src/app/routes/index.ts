import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ResearchRoutes } from "../modules/research/research.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { userAuthRoutes } from "../Auth/auth.route";

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
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;