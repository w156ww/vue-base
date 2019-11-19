<template>
    <ul class="v-nav" :style="{height: navHeight, width: navWidth}">
        <li v-for="item in navList" :key="item.path">
            <router-link :to="item[props.path]">{{item[props.title]}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            navList: {
                type: Array,
                required: true
            },
            props: {
                type: Object,
                default() {
                    return {
                        title: 'title',
                        path: 'path'
                    }
                }
            },
            navHeight: {
                type: String,
                default: '100%'
            },
            navWidth: {
                type: String,
                default: '100%'
            }
        }
    }
</script>

<style lang="scss">
.v-nav {
    display: flex;
    li {

        line-height: 60px;
        a {
            display: inline-block;
            padding: 0 20px;
        }
        &:hover {
            background-color: #66ccff;
            border-bottom: 1px solid #42b983;
        }
    }
}
</style>
