<template>
    <div class="card-list">
        <div class="d-flex justify-space-between align-center mb-4">
            <h1 class="title">Tarjetas</h1>
            <v-btn class="link" @click="navigateToCards" elevation="0" variant="text" density="compact">Ver más
                ></v-btn>
        </div>
        <template v-for="(card, index) in displayedCards" :key="index">
            <MiniCard v-bind="card" />
        </template>
    </div>
</template>

<script>
import MiniCard from './MiniCard.vue';
export default {
    name: 'CardList',
    components: {
        MiniCard
    },

    props: {
        cards: {
            type: Array,
            required: true
        },
        displayCount: {
            type: Number,
            default: 5
        }
    },

    computed: {
        displayedCards() {
            return this.cards.slice(0, this.displayCount)
        }
    },

    methods: {
        navigateToCards() {
            return this.$router.push('/tarjetas')
        }
    }
}
</script>

<style scoped>
.card-list {
    padding: 20px 20px 20px 20px;
    background-color: rgb(var(--v-theme-surface));
    border-radius: 20px 20px 120px 0;
    overflow: hidden;
    height: fit-content+10vh;
    max-height: 80vh;
    min-width: fit-content;
}

.link {
    color: rgb(var(--v-theme-details));
    font-size: x-small;
    padding: 0 12px 0 12px;
    align-self: center;
}
</style>
