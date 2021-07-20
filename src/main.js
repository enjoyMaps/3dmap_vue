import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/Base.scss'
import './utils/directives.js';
Vue.config.productionTip = false

import { Button } from 'element-ui';
Vue.use(Button);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
