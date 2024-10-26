<template>
    <h1 class="text-no-wrap">Tarjetas</h1>
    <CardsList :cards="cardStore.cards" />
</template>

<script>
import { useCardStore } from '@/stores/CardStore';

export default {
    data() {
        return {
            cardStore: useCardStore()
        }
    }
}
</script>
