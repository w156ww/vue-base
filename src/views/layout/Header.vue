<template>
    <header class="header">
        <div class="header-wrapper">
            <h1 class="header-wrapper-logo">
                <router-link to="/">logo</router-link>
            </h1>
            <nav>
                <Nav :nav-list="navList" />
            </nav>
        </div>
    </header>
</template>

<script>
    import Nav from "../../components/Nav";
    export default {
        name: 'Header',
        components: {
            Nav
        },
        data() {
            return {
                navList: [
                    {
                        title: '首页',
                        path: '/'
                    },
                    {
                        title: '日志',
                        path: '/journal'
                    },
                    {
                        title: '随笔记录',
                        path: 'record'
                    }
                ]
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        background-color: #222222;
        &-wrapper {
            width: 1280px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            a {
                color: #fff;
            }
            &-logo {
                line-height: 60px;
            }

        }
    }
</style>
