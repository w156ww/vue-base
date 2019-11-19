<template>
    <div class="layout">
        <div class="header">
            <Header />
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Layout",
        components: {
            Header
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">

</style>
