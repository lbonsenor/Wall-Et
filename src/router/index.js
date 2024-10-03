import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Transfer from '@/views/Transfer.vue'
import { createWebHashHistory } from 'vue-router'


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
