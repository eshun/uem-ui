<template>
    <transition name="el-fade-in">
        <el-select class="app-selector-wrapper" v-model="value8" filterable placeholder="Please select an app">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </transition>
</template>

<script>
    export default {
        name: "app-selector",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }],
                value8: ''
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    // .select-hidden
    .app-selector-wrapper {
        width: 100%;
        background-color: #202a37 !important;
    }
</style>
