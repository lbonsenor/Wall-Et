<template>
    <v-dialog v-model="showDeleteConfirmation" max-width="400">
        <v-card rounded="lg" class="pa-4">
            <v-card-title class="headline">Confirmar eliminación de tarjeta</v-card-title>
            <v-card-text class="pt-2">
                ¿Estás seguro de que quieres eliminar esta tarjeta? Esta acción no se puede deshacer.
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" variant="outlined" @click="showDeleteConfirmation = false">Cancelar</v-btn>
                <v-btn color="error" variant="flat" @click="handleRemove">Eliminar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useCardStore } from '@/stores/CardStore';

const props = defineProps({
    cardId: {
        type: Number,
        required: true
    }
});

const cardStore = useCardStore();
const showDeleteConfirmation = ref(false);

function handleRemove() {
    cardStore.removeCard(props.cardId);
    showDeleteConfirmation.value = false;
}

defineExpose({
    showDeleteConfirmation
});
</script>