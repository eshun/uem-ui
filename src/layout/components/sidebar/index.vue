<template>
    <el-aside width="80px">
        <div class="aside-container">
            <logo />
            <el-scrollbar class="scrollbar-container">
                <app-menu />
            </el-scrollbar>
        </div>
        <div class="drawer-bg" />
    </el-aside>
</template>

<script>
    import Logo from './Logo'
    import AppMenu from './Menu'
    export default {
        name: "sidebar",
        components: { Logo, AppMenu },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .aside-container {
        position: absolute;
        z-index: 99;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-height: 100%!important;
        max-width: none;
        padding: 0;
        width: 80px;
        height: 100%;
        transform: translateX(0px);
        transition: .2s cubic-bezier(.4,0,.2,1);
        transition-property: transform,width;
        background-color: #202a37 !important;
        .scrollbar-container{
            /*height: calc(100% - 48px);*/
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
    }
</style>
