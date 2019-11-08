import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Dialogs from '@/views/Dialogs'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dialogs',
        name: 'Dialogs',
        component: Dialogs
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
