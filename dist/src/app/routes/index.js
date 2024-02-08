"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const research_route_1 = require("../modules/research/research.route");
const blog_route_1 = require("../modules/blog/blog.route");
const auth_route_1 = require("../Auth/auth.route");
const news_routes_1 = require("../modules/news/news.routes");
const adviser_route_1 = require("../modules/adviser/adviser.route");
const member_route_1 = require("../modules/member/member.route");
const event_route_1 = require("../modules/event/event.route");
const memberresearch_route_1 = require("../modules/memberresearch/memberresearch.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/research',
        route: research_route_1.ResearchRoutes
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes
    }, {
        path: '/auth',
        route: auth_route_1.userAuthRoutes
    }, {
        path: '/news',
        route: news_routes_1.newsRoutes
    }, {
        path: '/adviser',
        route: adviser_route_1.AdviserRoutes
    }, {
        path: '/member',
        route: member_route_1.MemberProfileRoutes
    }, {
        path: '/event',
        route: event_route_1.eventRoutes,
    }, {
        path: '/memberresearch',
        route: memberresearch_route_1.MemberResearchRoutes,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
