<template>
  <v-card class="px-6 py-8" max-width="700" rounded="xl">
    <div class="mb-4">
      <v-text style="color: rgb(var(--v-theme-title));">Medio de ingreso</v-text>
    </div>  

    <div v-if="selectedOption === 'tarjeta'" class="mb-2">
      <v-select v-model="selectedCard" :items=formattedCards item-title="text" item-value="id"
        label="Seleccione una tarjeta" variant="outlined" rounded="lg" hide-details></v-select>
    </div>

    <div>
      <v-text style="color: rgb(var(--v-theme-title));">Monto</v-text>
      <v-text-field v-model="amount" class="amount" variant="underlined" prepend-icon="mdi-currency-usd"></v-text-field>
    </div>

    <div class="d-flex justify-center mt-4">
      <v-btn value="d-flex mx-auto" color="primary" width="40%" height=50 style="min-width: fit-content;"
        text="Confirmar" variant="outlined" rounded="xl"></v-btn>
    </div>
  </v-card>
</template>

<script>
import { useCardStore } from '@/stores/CardStore';

export default {
  data() {
    return {
      selectedOption: 'tarjeta',
      amount: '',
      cardStore: useCardStore(),
      selectedCard: null,
    }
  },

  computed: {
    formattedCards() {
      return this.cardStore.cards
        .filter(card => card.card_type === 'Débito')
        .map(card => ({
          id: card.id,
          text: `Tarjeta de ${card.card_type} terminada en ${card.card_number.slice(-4)}`
        }));
    }
  },

  watch: {
    selectedOption(newVal, oldVal) {
      if (!['tarjeta', 'cbu'].includes(newVal)) {
        this.selectedOption = oldVal;
      }
    }
  },
  
  methods: {
    selectCard(card) {
      this.selectedCard = card;
    }
  }
}
</script>

<style scoped>
.amount input,

.amount {
  font-size: xxx-large !important;
  text-align: end;
  min-width: 50%;
  margin-left: auto;
  font-family: "Fira Mono";
}
</style>