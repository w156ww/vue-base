import Home from "../views/home/Home";
import Layout from "../views/layout/Layout";
const Journal = () => import("../views/journal/Journal");
const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        meta: {
            keepAlive: false
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'journal',
                name: 'journal',
                component: Journal
            }
        ]
    },
];

export default routes;
