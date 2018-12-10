<template>
    <transition name="el-fade-in">
        <el-select
            filterable
            class="app-selector-wrapper"
            placeholder="Please select an app"
            v-model="selector">
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
                    value: 'demo-application',
                    label: 'demo-application'
                }],
                selector: 'demo-application'
            }
        },
        methods: {

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    // .select-hidden
    .app-selector-wrapper {
        width: 100%;
        .el-input__inner {
            border: 0;
            color: #fff;
            background-color: #171e27 !important;
        }
    }
</style>
