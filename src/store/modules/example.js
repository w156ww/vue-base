
const types = {
    CHANGE_COUNT: 'changeCount'
};


export default {
    namespaced: true,
    state: {
        count: 1
    },
    mutations: {
        [types.CHANGE_COUNT](state) {
            state.count++
        }
    },
    actions: {},
    getters: {}
}










