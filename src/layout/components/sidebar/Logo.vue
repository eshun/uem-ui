<template>
    <a data-v-2ca72322="" href="#/" class="logo-wrapper"><svg data-v-16ca4642="" data-v-2ca72322="" viewBox="0 0 1108 342" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="no-text"><path data-v-16ca4642="" fill="#01CEA2" d="M274 35.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16zM274 182.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16zM274 109.91H16c-8.837 0-16-7.163-16-16s7.163-16 16-16h258c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><!----></svg></a>
</template>

<script>
    export default {
        name: "logo"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .logo-wrapper {
        height: 80px;
        svg {
            width: 130px;
            transition: transform .2s;
            transform: translate(130px, 30px) scale(1);
        }
    }
    .aside--collapse {
        .logo-wrapper {
            svg {
                transform: translate(5px,30px) scale(.6);
            }
        }
    }
</style>
