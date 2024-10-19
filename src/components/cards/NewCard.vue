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
          <v-form @submit.prevent="addNewCard" v-model="isFormValid">
          <v-card-text>
            <v-text-field  v-model="cardNumber" label="Número de tarjeta" required :rules="[rules.cardNumber]" @input="formatCardNumber"></v-text-field>
            <v-text-field v-model="cardOwner" label="Titular de tarjeta" required></v-text-field>
            <v-row dense>
              <v-col cols="7" md="7" sm="7">
                <v-text-field v-model="expiryDate"  label="Fecha de vencimiento" hint="MM/YY" :rules="[rules.monthYear]"></v-text-field>
              </v-col>
              <v-col cols="5" md="5" sm="5">
                <v-text-field  v-model="cvv" label="CVV" required :rules="[rules.cvv]"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Cerrar" @click="dialog = false"></v-btn>

            <v-btn color="primary" text="Agregar" type="submit" :disabled="!isFormValid"></v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

    </div>
  </v-card>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useCardStore } from '@/stores/CardStore';

const cardStore = useCardStore();

const dialog = ref(false)
const isFormValid = ref(false);

const cardNumber = ref('');
const cardOwner = ref('');
const expiryDate = ref('');
const cvv = ref('');

const rules = {
  monthYear: v => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v) || 'Formato MM/YY inválido',
  cardNumber: v => /^(\d{4}\s?){4}$/.test(v.replace(/\s/g, '')) || 'Número de tarjeta inválido',
  cvv: v => /^\d{3,4}$/.test(v) || 'CVV inválido'
};

const formatCardNumber = () => {
  cardNumber.value = cardNumber.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
};
const addNewCard = () => {
  if (isFormValid.value) {
    const newCard = {
      card_brand: detectCardBrand(cardNumber.value),
      card_type: detectCardType(cardNumber.value),
      card_number: cardNumber.value,
      card_owner: cardOwner.value,
      card_expiry_date: expiryDate.value,
      card_cvv: cvv.value
    };
    cardStore.addCard(newCard);
    resetForm();
    dialog.value = false;
  }
  }

const resetForm = () => {
  cardNumber.value = '';
  cardOwner.value = '';
  expiryDate.value = '';
  cvv.value = '';
};


// CAMBIAR LUEGO!!!!!
const detectCardBrand = (number) => {
  // a modo de ejemplo 
  if (number.startsWith('4')) return 'Visa';
  if (number.startsWith('5')) return 'Mastercard';
  if (number.startsWith('3')) return 'American Express';
  return 'Unknown';
};

const detectCardType = (number) => {
  if (number.startsWith('4')) return 'Credito';
  if (number.startsWith('5')) return 'Debito';
  return 'Credito';
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