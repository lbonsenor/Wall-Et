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
import { useUserStore } from '@/stores/UserStore'


const routes = [
    { 
        path: '/inicio', 
        name: 'home',
        component: Home,
        meta: {requiresAuth : true}
    }, 
    { 
        path: '/transferir',
        name: 'transferir',
        component: Transfer,
        meta: {requiresAuth : true} 
    },
    { 
        path: '/mis-tarjetas',
        name: 'cards',
        component: Cards,
        meta: { requiresAuth: true}
    },
    { 
        path: '/actividades',
        name: 'activities',
        component: Activities,
        meta: { requiresAuth: true}
    },
    { 
        path: '/account',
        name: 'account',
        component: Account,
        meta: { requiresAuth: true}
    },
    { 
        path: '/',
        name: 'landing',
        component: Landing,
        meta: {requiresAuth : false}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta : { requiresAuth: false }
    },
    {
        path: '/reset',
        name: 'resetpassword',
        component: ResetPassword,
        meta: { requiresAuth: true}
    },
    {
        path: '/cobrar',
        name: 'charge',
        component: Charge,
        meta: { requiresAuth: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => { /* authentication is set from here! */
const userStore = useUserStore();
    if(to.meta.requiresAuth && !userStore.isSignedIn){
        next({
            path: '/login',
            query: { redirect: to.fullPath }
          });
    }
    else {
        next();
    }
  });
  
export default router; 
