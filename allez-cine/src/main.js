import Vue from 'vue'
import App from './App.vue'

import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Series from './views/Series.vue'
import DetailsSheet from './views/DetailsSheet.vue'

import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$http = axios

Vue.config.productionTip = false

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/films',
        name: 'films',
        component: Films
    },
    {
        path: '/series',
        name: 'series',
        component: Series
    },
    {
        path: '/details/:filmId',
        name: 'details',
        component: DetailsSheet
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
