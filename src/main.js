import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mock
if (process.env.NODE_ENV === 'development') {
    require('./mock/index');
}


// style
import './assets/style/index.scss';


Vue.config.productionTip = false;

// router-guards
// import createRouterGuard from "./router/router-guards";
// createRouterGuard(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
