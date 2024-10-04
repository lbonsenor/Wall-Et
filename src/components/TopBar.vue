<template>
    <!-- <v-card 
    height="50px"
    flat
    > -->
        <v-toolbar density="compact" class="fixed-bar pt-4 pr-4" color="transparent">
            <!-- <v-toolbar-title>Title</v-toolbar-title> -->
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon color="white" @click="toggleTheme">{{ themeIcon }}</v-icon>
            </v-btn>
            <v-btn color="white" icon class="mr-3">
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-avatar color="info" icon="mdi-account" ></v-avatar>
        </v-toolbar>
    <!-- </v-card> -->
</template>

<script setup>
import { useTheme } from 'vuetify';
import { computed } from 'vue';

const theme = useTheme()

const isDarkTheme = computed(() => theme.global.current.value.dark)

const themeIcon = computed(() => 
    isDarkTheme.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent')

function toggleTheme () {
    theme.global.name.value = isDarkTheme.value ? 'lightTheme' : 'darkTheme'
}
</script>

<style scoped>
    .fixed-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: 12px;
    }
</style>