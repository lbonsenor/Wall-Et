<template>
    <h1 class="text-no-wrap">Tarjetas</h1>
    <CardsList :cards="cardStore.cards" />
</template>

<script>
import CardsList from '@/components/cards/CardsList.vue';

import { onMounted } from 'vue';
import { useCardStore } from '@/stores/CardStore';

export default{
    data() {
        return{
            cardStore: useCardStore()
        }
    }
}
// onMounted(() => {
//     cardStore.fetchCards();
// });
</script>

