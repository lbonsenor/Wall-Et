<template>
    <v-toolbar density="compact" class="fixed-bar pt-4 pr-4" color="transparent">
        <h1 class="h1">{{ currentTitle }}</h1>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleTheme">
            <v-icon color="white">{{ themeIcon }}</v-icon>
        </v-btn>
        <v-btn v-if="isSignedIn" color="white" icon class="mr-3" @click="notifications">
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn v-if="isSignedIn" icon @click="navigateToAccount">
            <v-avatar color="info">
                <v-img v-if="userStore.getUserAvatar !== 'mdi-account'" :src="userStore.getUserAvatar" />
                <v-icon v-else>mdi-account</v-icon>
            </v-avatar>
        </v-btn>
    </v-toolbar>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/UserStore';

const theme = useTheme()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isDarkTheme = computed(() => theme.global.current.value.dark)

const themeIcon = computed(() =>
    isDarkTheme.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent')

const currentTitle = computed(() => {
    const routeTitles = {
        '/inicio': 'Inicio',
        '/transferir': 'Transferir',
        '/ingresar': 'Ingresar',
        '/actividades': 'Actividades',
        '/tarjetas': 'Tarjetas',
        '/cobrar': 'Cobrar',
        '/account': 'Cuenta'
    }
    return routeTitles[route.path] || ''
})

const props = defineProps({
    isSignedIn: Boolean
})

function toggleTheme() {
    theme.global.name.value = isDarkTheme.value ? 'lightTheme' : 'darkTheme'
}

function navigateToAccount() {
    router.push('/account')
}

const notifications = () => {
    alert("Notifications")
}
</script>

<style scoped>
.fixed-bar {
    z-index: 10;
}

.h1 {
    color: white;
    margin-left: 70px;
    margin-bottom: 2px;
}
</style>