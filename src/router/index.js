import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router-config";

Vue.use(VueRouter);

// 控制路由切换后的滚动
function scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : {x: 0, y: 0};
}


const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
    scrollBehavior
});

export default router;
