<template>
    <v-dialog v-model="showModifyDialog" max-width="600">
        <v-card prepend-icon="mdi-credit-card" title="Modificar Tarjeta">
            <v-card-text>
                <v-text-field label="Número de tarjeta" required v-model="cardData.card_number"
                    :rules="[rules.card_number]" maxlength="19"></v-text-field>
                <v-text-field label="Titular de tarjeta" required v-model="cardData.card_owner"></v-text-field>
                <v-row dense>
                    <v-col cols="7" md="7" sm="7">
                        <v-text-field label="Fecha de vencimiento" hint="MM/YY" required
                            v-model="cardData.card_expiry_date" :rules="[rules.card_expiry_date]"
                            maxlength="5"></v-text-field>
                    </v-col>
                    <v-col cols="5" md="5" sm="5">
                        <v-text-field label="CVV" required v-model="cardData.card_cvv" :rules="[rules.card_cvv]"
                            maxlength="3"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text="Cancelar" variant="outlined" @click="showModifyDialog = false"></v-btn>
                <v-btn color="primary" text="Guardar" variant="flat" :disabled="!isCardValid"
                    @click="handleModify"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useCardStore } from '@/stores/CardStore';

const props = defineProps({
    cardId: {
        type: Number,
        required: true
    }
});

const cardStore = useCardStore();
const showModifyDialog = ref(false);

const cardData = ref({
    card_number: '',
    card_owner: '',
    card_expiry_date: '',
    card_cvv: '',
    card_type: ''
});

watch(() => showModifyDialog.value, (newValue) => {
    if (newValue) {
        const card = cardStore.cards.find(c => c.id === props.cardId);
        if (card) {
            cardData.value = {
                ...card,
                card_cvv: String(card.card_cvv)
            };
        }
    }
}, { immediate: true });

const rules = {
    card_expiry_date: value => {
        if (!value) return 'Campo requerido';
        const pattern = /^(0?[0-9]|1[0-2])\/[0-9]{2}$/;
        return pattern.test(value) || 'Mes/Año Inválido';
    },
    card_number: value => {
        if (!value) return 'Campo requerido';
        const pattern = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
        return pattern.test(value.replace(/\s/g, '')) || 'Tarjeta Inválida';
    },
    card_cvv: value => {
        if (!value) return 'Campo requerido';
        const pattern = /^[0-9]{3}$/;
        return pattern.test(value) || 'CVV Inválido';
    }
};

watch(() => cardData.value.card_number, (newValue) => {
    if (newValue) {
        const cleaned = newValue.replace(/\s/g, '');
        const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
        cardData.value.card_number = formatted;
    }
});

const isCardValid = computed(() => {
    if (!cardData.value) return false;

    const { card_number, card_expiry_date, card_cvv, card_owner } = cardData.value;
    if (!card_number || !card_expiry_date || !card_cvv || !card_owner) return false;

    return (
        rules.card_number(card_number) === true &&
        rules.card_expiry_date(card_expiry_date) === true &&
        rules.card_cvv(card_cvv) === true &&
        card_owner.trim() !== ''
    );
});

function handleModify() {
    const updatedCard = {
        ...cardData.value,
        card_cvv: Number(cardData.value.card_cvv)
    };
    cardStore.modifyCard(props.cardId, updatedCard);
    showModifyDialog.value = false;
}

defineExpose({
    showModifyDialog
});
</script>