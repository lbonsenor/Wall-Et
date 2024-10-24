<template>
  <v-card class="mx-auto px-6 py-8" max-width="700" rounded="xl">
    
    <div class="text-center mb-4">
      <v-text style="color: rgb(var(--v-theme-title));">Seleccione medio de ingreso:</v-text>
    </div>
    <div class="d-flex justify-center mb-4">
      <v-btn-toggle v-model="selectedOption">
        <v-btn value="tarjeta" text="Tarjeta"></v-btn>
        <v-btn value="cbu" text="CBU"></v-btn>
      </v-btn-toggle>
    </div>

    <v-text-field 
      v-if="selectedOption === 'cbu'"
      class="mb-2"
      variant="outlined" 
      rounded="lg" 
      placeholder="Ingrese su CBU" 
      persistent-placeholder 
      hide-details 
      hide-spin-buttons 
      color="secondary" 
    ></v-text-field>

    <!-- Rest of your form fields -->
    <v-text-field 
      class="mb-2"
      variant="outlined" 
      rounded="lg" 
      placeholder="Nombre de usuario" 
      persistent-placeholder 
      hide-details 
      hide-spin-buttons 
      color="secondary" 
    ></v-text-field>
    <v-text-field 
      class="mb-2"
      variant="outlined" 
      rounded="lg" 
      placeholder="Contraseña" 
      persistent-placeholder 
      hide-details 
      hide-spin-buttons 
      color="secondary" 
    ></v-text-field>
    <v-text-field 
      class="mb-2"
      variant="outlined" 
      rounded="lg" 
      placeholder="Repita contraseña" 
      persistent-placeholder 
      hide-details 
      hide-spin-buttons 
      color="secondary" 
    ></v-text-field>
    <div>
      <v-text style="color: rgb(var(--v-theme-title));">Monto</v-text>
      <v-text-field v-model="amount" class="amount" variant="underlined"
        prepend-icon="mdi-currency-usd"></v-text-field>
    </div>
    <div class="d-flex justify-center mt-4">
      <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50 style="min-width: fit-content;" text="Confirmar" variant="outlined" rounded="xl"></v-btn>
    </div>
  </v-card>  
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'tarjeta',
      amount: '',
    }
  },
}
</script>