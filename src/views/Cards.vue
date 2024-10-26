<template>
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
