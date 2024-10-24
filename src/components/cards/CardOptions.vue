<template>
    <div class="d-flex mt-2" style="min-height:150px;">
        <v-divider vertical class="border-opacity-100" />
        <div class="card_options">
            <div class="d-flex">
                <v-icon icon="mdi-swap-horizontal mr-4" />
                <p>Modificar datos</p>
            </div>
            <div class="d-flex">
                <v-icon icon="mdi-pause mr-4" />
                <p>Pausar</p>
            </div>
            <div class="d-flex erase" @click="removeCard">
                <v-icon icon="mdi-trash-can-outline mr-4" />
                <p>Eliminar</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCardStore } from '@/stores/CardStore';

const props = defineProps({
    cardId: {
        type: Number,
        required: true
    }
});

const cardStore = useCardStore();
function removeCard() {
    cardStore.removeCard(props.cardId);
}
</script>
<style scoped>
.card_options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: fit-content;
    margin: 3%;
    align-items: flex-start;
}

.card_options div {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 0 20px 20px 0;
    width: 35vh;
}

.card_options div:hover {
    background-color: rgb(var(--v-theme-button_hover));
    /* border-radius: 20%; */
}

.card_options div.erase:hover {
    background-color: rgb(var(--v-theme-error));
}
</style>
