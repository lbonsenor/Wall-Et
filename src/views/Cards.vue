<template>
    <h1 class="text-no-wrap">Mis Tarjetas</h1>
    <CardsList :cardItems="cardStore.cards" />
</template>

<script setup>
import CardsList from '@/components/cards/CardsList.vue';

import { onMounted } from 'vue';
import { useCardStore } from '@/stores/CardStore';

const cardStore = useCardStore();
onMounted(() => {
    cardStore.fetchCards();
});
</script>

