<template>
    <el-menu
        class="el-menu-wrapper"
        :collapse="collapse"

        background-color="#202a37"
        text-color="#FFFFFF"
        active-text-color="#01CEA2"
    >
        <el-menu-item-group>
            <template slot="title">
                <span slot="title">Bucket Centric</span>
            </template>
            <el-menu-item index="0">
                <i class="el-icon-document"></i>
                <span slot="title">Servers Overview</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">Settings</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item-group title="分组1">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu-item-group>
        <el-menu-item-group>
            <template slot="title">
                <span slot="title">App Centric</span>
            </template>
            <el-menu-item index="2" disabled>
                <template>
                    <app-selector />
                </template>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航3</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航4</span>
            </el-menu-item>
        </el-menu-item-group>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex'
    import AppSelector from './Selector'
    export default {
        name: "app-menu",
        components: { AppSelector },
        computed: {
            ...mapGetters([
                'collapse'
            ]),
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .el-submenu [class^=el-icon-], .el-menu-item [class^=el-icon-] {
        margin: 0 8px !important;
    }
    .el-menu-item-group__title {
        display: inline-block;
        overflow: hidden;
        height: 24px;
        word-wrap:break-word;
        white-space:normal;
    }
    .el-menu--collapse {
        .el-submenu__title {
            span {
                display: none;
            }
            .el-submenu__icon-arrow {
                display: none;
            }
        }
    }
    .el-submenu__title i, .el-menu-item i {
        color: #fff !important;
    }
    .el-menu-item.is-disabled {
        opacity: 1;
        cursor: unset;
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu-wrapper {
        width: 80px;
        border: 0;
        text-align: left;
        align-items: center;
        &:not(.el-menu--collapse) {
            width: 300px;
            // height: 100vh;
        }
    }
</style>
