import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Series from './views/Series.vue'
import DetailsSheet from './views/DetailsSheet.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: Home
    // },
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
        path: '/details/:type/:filmId',
        name: 'details',
        component: DetailsSheet
    },
        
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

import axios from 'axios'

Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')



