<template>
      <v-card class = "mx-auto px-6 py-8" max-width="700" rounded="xl">
    
        <v-text style="color: rgb(var(--v-theme-title));">Seleccione medio de ingreso</v-text>
        <v-btn-toggle>
            <v-btn text="Tarjeta"></v-btn>
            <v-btn text="CBU"></v-btn>
        </v-btn-toggle>
        <v-text-field 
          class="mb-2"
          variant="outlined" 
          rounded="lg" 
          placeholder="Nombre de usuario" 
          persistent-placeholder 
          hide-details 
          hide-spin-buttons 
          color="secondary" 
          width="300px"
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
          width="300px"
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
          width="300px"
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

</script>
<style>

</style>