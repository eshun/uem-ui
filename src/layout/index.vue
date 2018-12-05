<template>
    <el-container class="app-container">
        <sidebar/>
        <el-main class="main-container">
        </el-main>
    </el-container>
</template>

<script>
    import { Sidebar } from './components'

    export default {
        name: "layout",
        components: { Sidebar },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-container {
        height: 100%;
    }
</style>
