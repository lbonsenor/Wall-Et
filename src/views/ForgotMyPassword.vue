<template>
  <div class="reset-password-wrapper">
    <div class="container">
      <div class="header">
        <img class="logo" src="./../assets/wallet-white.png" alt="Wall-Et logo" />
        <h2>Wall · Et</h2>
      </div>

      <h1 class="reset-header">Recuperá tu contraseña</h1>
      <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl">
        <div v-if="step === 1">
          <v-text-field v-model="email" class="mb-2" variant="outlined" rounded="lg"
            placeholder="Ingresa tu correo electrónico" persistent-placeholder hide-details hide-spin-buttons
            color="secondary" width="300px"></v-text-field>
          <div class="d-flex justify-center mt-4">
            <v-btn value="send-code-button d-flex mx-auto" color="primary" width="60%" height=50
              style="min-width: fit-content;" text="Enviar código" variant="outlined" rounded="xl"
              @click="sendVerificationCode"></v-btn>
          </div>
        </div>

        <div v-if="step === 2">
          <v-text-field v-model="verificationCode" class="mb-2" variant="outlined" rounded="lg"
            placeholder="Ingresa el código de verificación" persistent-placeholder hide-details hide-spin-buttons
            color="secondary" width="300px"></v-text-field>
          <div class="d-flex justify-center mt-4">
            <v-btn value="verify-code-button d-flex mx-auto" color="primary" width="60%" height=50
              style="min-width: fit-content;" text="Verificar código" variant="outlined" rounded="xl"
              @click="verifyCode"></v-btn>
          </div>
        </div>

        <div v-if="step === 3">
          <v-text-field v-model="newPassword" class="mb-2" variant="outlined" rounded="lg"
            placeholder="Ingresa tu nueva contraseña" persistent-placeholder hide-details hide-spin-buttons
            color="secondary" width="300px" type="password"></v-text-field>
          <v-text-field v-model="confirmPassword" class="mb-2" variant="outlined" rounded="lg"
            placeholder="Confirma tu nueva contraseña" persistent-placeholder hide-details hide-spin-buttons
            color="secondary" width="300px" type="password"></v-text-field>
          <div class="d-flex justify-center mt-4">
            <v-btn value="reset-password-button d-flex mx-auto" color="primary" width="60%" height=50
              style="min-width: fit-content;" text="Restablecer contraseña" variant="outlined" rounded="xl"
              @click="resetPassword"></v-btn>
          </div>
        </div>
      </v-card>
    </div>

    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-text class="text-center pa-4">
          {{ dialogMessage }}
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
      step: 1,
      email: '',
      verificationCode: '',
      newPassword: '',
      confirmPassword: '',
      dialog: false,
      dialogMessage: '',
    };
  },
  methods: {
    sendVerificationCode() {
      this.step = 2;
      this.showDialog('Se ha enviado un código de verificación a tu correo electrónico.');
    },
    verifyCode() {
      this.step = 3;
      this.showDialog('Código verificado correctamente.');
    },
    resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.showDialog('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
      }
      this.showDialog('Tu contraseña ha sido cambiada exitosamente.');
    },
    showDialog(message) {
      this.dialogMessage = message;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      if (this.step === 3 && this.dialogMessage === 'Tu contraseña ha sido cambiada exitosamente.') {
        this.$router.push('/login');
      }
    },
  }
};
</script>

<style scoped>
.reset-password-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
}

.logo {
  max-width: 100%;
  height: 50px;
  margin-bottom: 16px;
}

.header {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.reset-header {
  margin-top: 1px;
  margin-bottom: 16px;
  text-align: center;
  color: white;
}

h2 {
  color: white;
  margin-left: 10px;
}
</style>