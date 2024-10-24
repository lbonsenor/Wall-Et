<template>
    <div class="d-flex">
        <div class="card-list">
            <template v-for="(cardItem) in this.cardItems" :key="index">
                <CardItem v-bind="cardItem" />
            </template>
        </div>
        <NewCard class="ml-2"/>
    </div>
</template>

<script setup>
import CardItem from './CardItem.vue';
import NewCard from './NewCard.vue';
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

/* Firefox & Chrome */
.card-list {
    scrollbar-width: thin;
    scrollbar-color: rgb(var(--v-theme-primary)) rgb(var(--v-theme-surface));
}
</style>