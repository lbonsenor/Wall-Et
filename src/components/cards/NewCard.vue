<template>
  <v-card class="mt-2 ml-5 new-card d-flex flex-column justify-center" height="30vh" min-width="40vh" max-width="60vh">
    <div class="card-content d-flex flex-column align-center">
      <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="add-btn mb-3" variant="tonal" color="white" icon>
            <v-icon icon="mdi-plus" size="large" v-bind="activatorProps"></v-icon>
          </v-btn>
          <p class="text-center add">Agregar tarjeta</p>
        </template>
        <v-card prepend-icon="mdi-credit-card" title="Agregar Tarjeta">
          <v-card-text>
            <v-text-field label="Número de tarjeta"  required v-model="cardInfo.card_number" :rules="[rules.card_number]"></v-text-field>
            <v-text-field label="Titular de tarjeta" required v-model="cardInfo.card_owner"></v-text-field>
            <v-row dense>
              <v-col cols="7" md="7" sm="7">
                <v-text-field label="Fecha de vencimiento" hint="MM/YY" required v-model="cardInfo.card_expiry_date" :rules="[rules.card_expiry_date]"></v-text-field>
              </v-col>
              <v-col cols="5" md="5" sm="5">
                <v-text-field label="CVV" required v-model="cardInfo.card_cvv" :rules="[rules.card_cvv]"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text="Cerrar" variant="outlined" @click="dialog = false"></v-btn>

            <v-btn color="primary" text="Agregar" variant="flat" :disabled="!isCardValid" @click="dialog = false; cardStore.addCard(cardInfo)"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
  </v-card>
</template>

<script>
import { useCardStore } from '@/stores/CardStore';

export default {
  name: 'NewCard',
  data: () => ({
    dialog: false,
    cardStore: useCardStore(),
    cardInfo: {
      card_number: '',
      card_owner: '',
      card_expiry_date: '',
      card_cvv: '',
    },
    rules: {
      card_expiry_date: function (value) {
        const pattern = /^(0?[0-9]|1[0-2])\/[0-9]{2}$/;
        return pattern.test(value) || 'Mes/Año Inválido'
        
      },
      card_number: value => {
        const pattern = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
        return pattern.test(value) || 'Tarjeta Inválida'
      }, 
      card_cvv: value => {
        const pattern = /^[0-9]{3}$/;
        return pattern.test(value) || 'CVV Inválido'
      }, 
    },
  }),
  computed: {
    isCardValid() {
      const { card_number, card_expiry_date, card_cvv } = this.cardInfo;
      return (
        this.rules.card_number(card_number) === true &&
        this.rules.card_expiry_date(card_expiry_date) === true &&
        this.rules.card_cvv(card_cvv) === true
      );
    }
  },

}
</script>

<style scoped>
.new-card {
  background-color: transparent;
  border: 3px dashed white;
  opacity: 0.5;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.new-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--v-theme-secondary), 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.new-card:hover::before {
  opacity: 1;
}

.new-card:hover {
  border-color: white;
  opacity: 1;
  transform: scale(1.02);
}

.add-btn {
  background-color: (white, 0.1);
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: (white, 0.4);
  transform: scale(1.1);
}

.add-btn .v-icon {
  color: white;
}

.add {
  color: white;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.new-card:hover .text-secondary {
  opacity: 1;
}
</style>