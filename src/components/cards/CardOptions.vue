<template>
    <div class="d-flex mt-2" style="min-height:150px;">
        <v-divider vertical class="border-opacity-100" />
        <div class="card_options">
            <div class="d-flex" @click="modifyCardRef.showModifyDialog = true">
                <v-icon icon="mdi-swap-horizontal mr-4" />
                <p>Modificar</p>
            </div>
            <div class="d-flex" @click="pauseCard">
                <v-icon icon="mdi-pause mr-4" />
                <p>Pausar</p>
            </div>
            <div class="d-flex erase" @click="removeCardRef.showDeleteConfirmation = true">
                <v-icon icon="mdi-trash-can-outline mr-4" />
                <p>Eliminar</p>
            </div>
        </div>
    </div>

    <RemoveCard ref="removeCardRef" :cardId="props.cardId" />

    <ModifyCard ref="modifyCardRef" :cardId="props.cardId" />
</template>

<script setup>
import { ref } from 'vue';
import RemoveCard from './RemoveCard.vue';
import ModifyCard from './ModifyCard.vue';

const removeCardRef = ref(null);
const modifyCardRef = ref(null);

const props = defineProps({
    cardId: {
        type: Number,
        required: true
    }
});

const pauseCard = () => {
    alert("Pausar tarjeta");
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
    animation: slideIn 0.2s ease-out;
}

.card_options div {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 0 20px 20px 0;
    width: 25vh;
}

.card_options div:hover {
    background-color: rgb(var(--v-theme-button_hover));
}

.card_options div.erase:hover {
    background-color: rgb(var(--v-theme-error));
}

@keyframes slideIn {
    from {
        transform: translateX(-20px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>