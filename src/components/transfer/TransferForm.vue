<template>
    <v-card rounded="xl" style="min-width: fit-content;" class="pa-6">
        <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Destinatario</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá CVU o alias"></v-text-field>
        </div>
        
        <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Mensaje</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá un mensaje al destinatario"></v-text-field>
        </div>

        <div class="mb-2">
            <v-text class="mb-2" style="color: rgb(var(--v-theme-title));">Medio de Pago</v-text>
            <v-select v-model="selectedPaymentMethod" :items="availablePaymentMethods" item-title="text"
                item-value="value" variant="outlined" rounded="lg" hide-details></v-select>
        </div>

        <div>
            <v-text style="color: rgb(var(--v-theme-title));">Monto</v-text>
            <v-text-field v-model="amount" @blur="handleAmountInput" class="amount" variant="underlined"
                prepend-icon="mdi-currency-usd"></v-text-field>
        </div>

        <v-btn class="d-flex mx-auto" style="min-width: fit-content;" width="50%" height=50 color="primary" rounded="xl"
            prepend-icon="mdi-send-outline" text="Continuar"></v-btn>
    </v-card>
</template>

<script>
import { useCardStore } from '@/stores/CardStore';

export default {
    data() {
        return {
            amount: '',
            selectedPaymentMethod: 'default',
            cardStore: useCardStore()
        }
    },
    computed: {
        availablePaymentMethods() {
            const methods = [
                {
                    value: 'default',
                    text: 'Dinero disponible'
                }
            ]

            this.cardStore.cards.forEach(card => {
                methods.push({
                    value: card.id.toString(),
                    text: `Tarjeta de ${card.card_type} ${card.card_brand} terminada en ${card.card_number.slice(-4)}`
                })
            })

            return methods
        }
    },
    methods: {
        handleAmountInput() {
            const num = parseFloat(this.amount.split('').filter(s => (s >= '0' && s <= '9') || s == ',').join('').replace(',', '.'))
            if (!isNaN(num)) {
                const formatter = new Intl.NumberFormat('es-AR', { style: 'decimal', minimumFractionDigits: 2 })
                this.amount = formatter.format(num)
            }
        }
    }
}
</script>

<style>
.amount input,
.amount {
    font-size: xxx-large !important;
    text-align: end;
    min-width: 50%;
    margin-left: auto;
    font-family: "Fira Mono";
}

.display {
    display: flex;
    flex-direction: column;
}

@media (min-width: 940px) {
    .display {
        width: 35%;
    }
}
</style>