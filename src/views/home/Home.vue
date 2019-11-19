<template>
    <div class="home">
        <h2>{{test}}</h2>
        <p>
            <span>数量：</span>
            <span>{{count}}</span>
        </p>
        <button @click="addCount">++++</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {commonRequest} from "../../service/request";

    export default {
        name: "home",
        data() {
            return {
                name: 'home'
            }
        },

        computed: {

            ...mapState([
                'test'
            ]),

            ...mapState('example', [
                "count"
            ])
        },

        methods: {

            ...mapMutations('example', [
                'changeCount'
            ]),

            addCount() {
                this.changeCount();
            },

            getDataSuccess() {
                commonRequest('/success').then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                })
            },

            getDataError() {
                commonRequest('/error').then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                })
            },
        },



        created() {
            this.getDataSuccess();
            this.getDataError();
        },

        activated() {
            console.log('触发了 keep-alive');
        },
        // beforeRouteEnter(to, from, next) {
        //     // 不能直接访问 this ，组件还没有被创建，可以采用回调函数的方式
        //     next(vm => {
        //
        //         console.log('回调函数:name::', vm.name);
        //     })
        // },
        // beforeRouteUpdate(to, from, next) {
        //     next();
        // },
        // beforeRouteLeave(to, from, next) {
        //     next();
        // }
    };
</script>
