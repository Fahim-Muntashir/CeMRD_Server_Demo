import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ResearchRoutes } from "../modules/research/research.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route:UserRoutes,
    },
    {
        path: '/research',
        route:ResearchRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;