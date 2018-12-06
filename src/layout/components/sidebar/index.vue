<template>
    <el-aside width="80px">
        <div
            :class="`aside-container `+ asideCollapse"
            :style="asideWidth"
            @mouseenter="handleCollapse"
            @mouseleave="handleCollapse"
            @focus="handleCollapse"
            @blur="handleCollapse"
        >
            <logo />
            <el-scrollbar class="scrollbar-container">
                <app-menu />
            </el-scrollbar>
        </div>
        <div v-if="!collapse" class="drawer-bg" @click="handleCloseCollapse" />
    </el-aside>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Logo from './Logo'
    import AppMenu from './Menu'
    export default {
        name: "sidebar",
        components: { Logo, AppMenu },
        computed: {
            ...mapGetters([
                'collapse',
            ]),
            asideWidth() {
                return {
                    width: this.collapse ? '80px' : '300px'
                }
            },
            asideCollapse() {
                return this.collapse ? 'aside--collapse' : ''
            }
        },
        methods: {
            handleCollapse(e) {
                e.stopPropagation()
                e.preventDefault()
                // this.$store.dispatch('toggleCollapse')

                if (e.type === 'mouseenter' || e.type === 'focus') {
                    this.$store.dispatch('toggleCollapse', false)
                } else if (e.type === 'mouseleave' || e.type === 'blur') {
                    this.$store.dispatch('toggleCollapse', true)
                }
            },
            handleCloseCollapse() {
                this.$store.dispatch('toggleCollapse', true)
            }
        }
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
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 98;
    }
</style>
