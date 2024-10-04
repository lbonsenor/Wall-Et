<template>
    <div class="card-list">
        <!-- <template v-slot:append>
            <v-button>Ver mas</v-button>
        </template> -->
        <div class="d-flex justify-space-between mb-4">
            <h1 class="title">Mis Tarjetas</h1>
            <v-btn class="link" @click="navigateToCards" elevation="0" variant="text" density="compact">Ver más ></v-btn>
        </div>
        <template v-for="(card, index) in displayedCards" :key="index">
            <MiniCard v-bind="card"/>
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
            return this.$router.push('/mis-tarjetas')
        }
    }
}
</script>

<style scoped>
.card-list { 
    /* max-width: auto; */
    margin: 12px 12px;
    padding: 20px 20px 0px 20px;
    background-color: rgb(var(--v-theme-surface));
    border-radius: 20px 20px 120px 0;
    overflow: hidden;
    /* height: calc(fit-content + 50vh); */
    /* min-height: calc(fit-content + 10px); */
    height: fit-content+10vh;
    max-height: 80vh;
}

.title { 
    color: rgb(var(--v-theme-title));
    align-self: center;
    font-size: medium;
    font-weight: bold;
    padding: 0 12px 0 12px;
}
.link {
    color: rgb(var(--v-theme-primary));
    font-size:x-small;
    padding: 0 12px 0 12px;
    align-self: center;
}
</style>
