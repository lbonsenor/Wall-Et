<template>
    <div class="d-flex" @click="handleOutsideClick">
        <div class="card-list">
            <template v-for="(cardItem, index) in cards" :key="index">
                <CardItem v-bind="cardItem" :isActive="activeCardId === cardItem.id"
                    @activate="setActiveCard(cardItem.id)" />
            </template>
        </div>
        <NewCard class="ml-2" />
    </div>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeCardId: null
        }
    },
    methods: {
        setActiveCard(cardId) {
            this.activeCardId = this.activeCardId === cardId ? null : cardId;
        },
        handleOutsideClick(event) {
            if (event.target === event.currentTarget) {
                this.activeCardId = null;
            }
        }
    }
}
</script>

<style scoped>
.card-list {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow-y: scroll;
    min-width: fit-content;
    overflow-x: hidden;
    direction: rtl;
    padding-left: 12px;
    margin-left: 10px;
}

.card-list>* {
    direction: ltr;
}

.card-list::-webkit-scrollbar {
    width: 1px;
}

.card-list::-webkit-scrollbar-track {
    background-color: rgb(var(--v-theme-primary));
}

.card-list::-webkit-scrollbar-thumb {
    background: rgb(var(--v-theme-surface));
    border-radius: 5px;

}

.card-list {
    scrollbar-width: thin;
    scrollbar-color: rgb(var(--v-theme-primary)) rgb(var(--v-theme-surface));
}
</style>