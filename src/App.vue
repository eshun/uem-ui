<template>
    <div id="app">
        <el-container class="app-wrapper">
            <el-aside width="80px" class="aside-container">
                <a data-v-2ca72322="" href="#/" class="home-link router-link-active"><svg data-v-16ca4642="" data-v-2ca72322="" viewBox="0 0 1108 342" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="no-text"><path data-v-16ca4642="" fill="#01CEA2" d="M274 35.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16zM274 182.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16zM274 109.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><!----></svg></a>
                <el-scrollbar>
                    <el-menu
                            class="el-menu-vertical-demo"
                            :collapse="true"

                            background-color="#202a37"
                            text-color="#FFFFFF"
                            active-text-color="#01CEA2"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                                <span slot="title">分组一</span>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <template>
                                <el-select v-model="value8" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main class="main-container">
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value8: ''
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100vh;
    }

    .el-menu-vertical-demo {
        width: 80px;
        height: 100vh;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #171e27;
        #nav {
            padding: 30px;
            a {
                font-weight: bold;
                color: #2c3e50;
                .router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
</style>