<template>
  <div class="reset-password-wrapper">
    <div class="container">
      <div class="header">
        <img class="logo" src="./../assets/wallet-white.png" alt="Wall-Et logo" />
        <h2> Wall · Et</h2>
      </div>

      <h1 class="reset-header">Restablezca su contraseña</h1>
      <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl">
        <v-text-field class="mb-2" variant="outlined" rounded="lg" placeholder="Introduzca su nueva contraseña"
          persistent-placeholder hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
        <v-text-field class="mb-2" variant="outlined" rounded="lg" placeholder="Repita su nueva contraseña"
          persistent-placeholder hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
        <div class="d-flex justify-center mt-4">
          <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50
            style="min-width: fit-content;" text="Restablecer" variant="outlined" rounded="xl" @click="resetPassword">
          </v-btn>
        </div>
      </v-card>
    </div>

    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-text class="text-center pa-4">
          La contraseña ha sido cambiada exitosamente.
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="closeDialog">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'sesion', // Set default selected button -> later change to an input from parent component
      dialog: false,
    };
  },
  methods: {
    resetPassword() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.$router.push('/inicio');
    },
  }
};
</script>

<style scoped>
.reset-password-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 68vh;
  width: 91vw;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reset-button {
  background-color: var(--v-theme-button);
}

.logo {
  max-width: 100%;
  height: 50px;
  margin-bottom: 4px;
}

.header {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}

.reset-header {
  text-align: center;
  color: white;
  width: 100%;
}
</style>