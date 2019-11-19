
const createRouterGuard = function (router) {
    router.beforeEach((to, from, next) => {

        next();
    });
    router.beforeResolve((to, from, next) => {

        next();
    });
    router.afterEach((to, from ) => {

    })
};


export default createRouterGuard;



