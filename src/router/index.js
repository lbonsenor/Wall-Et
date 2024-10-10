import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Transfer from '@/views/Transfer.vue'
import { createWebHashHistory } from 'vue-router'
import Cards from '@/views/Cards.vue'
import Activities from '@/views/Activities.vue'
import Account from '@/views/Account.vue'


const routes = [
    { 
        path: '/', 
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
