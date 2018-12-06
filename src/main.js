import Vue from 'vue'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import './styles/index.scss'

import App from './App.vue'
import router from './router/'
import store from './store/'

Vue.use(Element)

router.beforeEach((to, from, next) => {
    NProgress.start(); // start progress bar
    next(() => {
        NProgress.done();// finish progress bar
    });
});

router.afterEach(() => {
    NProgress.done();// finish progress bar
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
