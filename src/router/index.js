import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Transfer from '@/views/Transfer.vue'
import { createWebHashHistory } from 'vue-router'
import Cards from '@/views/Cards.vue'
import Activities from '@/views/Activities.vue'
import Account from '@/views/Account.vue'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import { components } from 'vuetify/dist/vuetify-labs.js'
import ResetPassword from '@/views/ResetPassword.vue'
import Charge from '@/views/Charge.vue'


const routes = [
    { 
        path: '/inicio', 
        name: 'home',
        component: Home 
    }, 
    { 
        path: '/transferir',
        name: 'transferir',
        component: Transfer 
    },
    { 
        path: '/mis-tarjetas',
        name: 'cards',
        component: Cards 
    },
    { 
        path: '/actividades',
        name: 'activities',
        component: Activities 
    },
    { 
        path: '/account',
        name: 'account',
        component: Account 
    },
    { 
        path: '/',
        name: 'landing',
        component: Landing 
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/reset',
        name: 'resetpassword',
        component: ResetPassword
    },
    {
        path: '/cobrar',
        name: 'charge',
        component: Charge
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.path);
    next();
  });
  
export default router; 
