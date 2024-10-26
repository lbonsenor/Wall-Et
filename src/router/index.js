import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Transfer from '@/views/Transfer.vue'
import Cards from '@/views/Cards.vue'
import Activities from '@/views/Activities.vue'
import Account from '@/views/Account.vue'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import ForgotMyPassword from '@/views/ForgotMyPassword.vue'
import Charge from '@/views/Charge.vue'
import { useUserStore } from '@/stores/UserStore'
import ErrorPage from '@/views/ErrorPage.vue'
import Deposit from '@/views/Deposit.vue'

const routes = [
    {
        path: '/inicio',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/transferir',
        name: 'transferir',
        component: Transfer,
        meta: { requiresAuth: true }
    },
    {
        path: '/tarjetas',
        name: 'cards',
        component: Cards,
        meta: { requiresAuth: true }
    },
    {
        path: '/actividades',
        name: 'activities',
        component: Activities,
        meta: { requiresAuth: true }
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: { requiresAuth: true }
    },
    {
        path: '/',
        name: 'landing',
        component: Landing,
        meta: { requiresAuth: false }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/resetar-contraseña',
        name: 'resetpassword',
        component: ResetPassword,
        meta: { requiresAuth: true }
    },
    {
        path: '/olvide-mi-contraseña',
        name: 'forgotMyPassword',
        component: ForgotMyPassword,
        meta: { requiresAuth: false }
    },
    {
        path: '/cobrar',
        name: 'charge',
        component: Charge,
        meta: { requiresAuth: true }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: ErrorPage,
        meta: { requiresAuth: false }
    },
    {
        path: '/ingresar',
        name: 'Ingresar',
        component: Deposit,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => { /* authentication is set from here! */
    const userStore = useUserStore();

    if (!to.meta.requiresAuth) {
        userStore.signOut()
    }

    if (to.meta.requiresAuth && !userStore.isSignedIn) {
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
