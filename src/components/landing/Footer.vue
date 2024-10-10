<template>
    <v-footer class="rgb(var(--v-theme-secondary)) mt-10" style="margin:-20%">
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" class="mx-2" rounded="xl" variant="text">
                {{ link }}
            </v-btn>

            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>WALL-Et</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        links: [
            'Sobre nosotros',
            'Servicios',
            'Blog',
            'Contactanos',
        ],
    }),
}
</script>