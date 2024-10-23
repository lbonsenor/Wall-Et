<template>
    <div class="d-flex flex-column align-center ga-3">
        <h1>¿Listo para comenzar?</h1>
        <v-card color="surface" class="d-flex flex-column align-center ga-3 pa-10 w-100" rounded="lg">
            <v-avatar class="pa-2" color="primary" image="@/assets/wallet-white.png" size="100px"/>
        <h3 class="text-center">Registrate a WALL-Et</h3>
        <p class="mb-2">Formá parte de nuestra comunidad y conocé todos nuestros beneficios.</p>
        <Email />
        </v-card>
        
    </div>
</template>

<script setup>
    import Email from './Email.vue';
</script>

<style scoped>
.inner-container {
    background-color: rgb(var(--v-theme-surface));
}
</style>