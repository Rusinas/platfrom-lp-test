import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Dialogs from '@/views/Dialogs'
import Messages from '@/components/Messages'

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
        component: Dialogs,
        children: [
            {
                path: ':id',
                name: 'Messages',
                component: Messages
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
