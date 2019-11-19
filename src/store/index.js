import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import store from "./store";
import example from "./modules/example";

Vue.use(Vuex);

const myPlugin = store => {
    store.subscribe((mutation, state) => {
        // console.log('mutation::', mutation);
        // console.log('state::', state);
    })
};


export default new Vuex.Store({
    ...store,
    modules: {
        example
    },
    plugins: [
        myPlugin,
        process.env.NODE_ENV === 'development' ? createLogger() : '',
    ],
    strict: process.env.NODE_ENV !== 'production'
})
