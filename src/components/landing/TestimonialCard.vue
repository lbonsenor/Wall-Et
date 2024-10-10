<template>

    <v-card color="text"
    width="25vw" height="fit-content"
    variant="tonal"
    elevation="12"
    rounded="xl"
    class="card d-flex flex-column align-center justify-center pa-6"
    
    >
        <v-avatar :image="image" size="100px" :color="color" class="justify-self-center"/>
        <p class="font-weight-bold my-2">{{ "@" + username }}</p>
        <v-icon icon="mdi-format-quote-open" size="50px"/>
        <p class="font-italic text-center">{{ quote }}</p>
    </v-card>

</template>

<script setup>
const props = defineProps({
    image: String,
    username: String,
    quote: String,
    color: String
})

</script>