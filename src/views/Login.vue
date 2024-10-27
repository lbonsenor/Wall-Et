<template>
  <div class="container">
    <div class="header ga-2" @click="returnLanding">
      <img class="logo my-auto" src="./../assets/wallet-white.png" alt="Wall-ET logo" />
      <h2>Wall · Et</h2>
    </div>

    <h1 class="welcome-header">Bienvenidx!</h1>
    <div class="button-toggle-container">
      <v-btn-toggle v-model="selected" mandatory rounded="xl">
        <v-btn class="pill-button" :class="{ 'active-button': selected === 'sesion' }" variant="outlined"
          value="sesion">
          Iniciar sesión
        </v-btn>
        <v-btn class="pill-button" :class="{ 'active-button': selected === 'registro' }" variant="outlined"
          value="registro">
          Registrarme
        </v-btn>
      </v-btn-toggle>
    </div>

    <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl" v-if="selected === 'sesion'">
      <v-text-field v-model="username" class="mb-2" variant="outlined" rounded="lg" placeholder="Nombre de usuario o email"
        persistent-placeholder hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <v-text-field v-model="password" class="mb-2" variant="outlined" rounded="lg" placeholder="Contraseña" persistent-placeholder
        hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <div class="d-flex justify-center mt-4">
        <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50
          style="min-width: fit-content;" text="Ingresar" variant="outlined" rounded="xl" @click="signin"></v-btn>
      </div>
    </v-card>

    <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl" v-if="selected === 'registro'" style="min-height: 450px;">
      <v-text-field v-model="name" class="mb-2" variant="outlined" rounded="lg" placeholder="Nombre" persistent-placeholder hide-details
        hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <v-text-field v-model="email" class="mb-2" variant="outlined" rounded="lg" placeholder="Email" persistent-placeholder hide-details
        hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <v-text-field v-model="username" class="mb-2" variant="outlined" rounded="lg" placeholder="Nombre de usuario" persistent-placeholder
        hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <v-text-field v-model="password" class="mb-2" variant="outlined" rounded="lg" placeholder="Contraseña" persistent-placeholder
        hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <v-text-field v-model="passwordrepeat" class="mb-2" variant="outlined" rounded="lg" placeholder="Repita contraseña" persistent-placeholder
        hide-details hide-spin-buttons color="secondary" width="300px"></v-text-field>
      <div class="d-flex justify-center mt-4">
        <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50
          style="min-width: fit-content;" text="Registrarme" variant="outlined" rounded="xl" @click="register" ></v-btn>
      </div>
    </v-card>

    <div class="forgot-password-link" v-if="selected === 'sesion'">
      <a href="#" @click.prevent="forgotPassword">Olvidé mi contraseña</a>
    </div>

    <v-dialog v-model="dialogVisible" max-width="400px">
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>{{ warningMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeDialog">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
import { ref } from 'vue';

export default {
  data() {
    return {
      username: '',
      name: '',
      password: '',
      email: '',
      passwordrepeat: '',
      selected: 'sesion', // Set default selected button -> later change to an input from parent component
      userStore: useUserStore(),
      dialogVisible: false,
      warningMessage: '',
    };
  },
  methods: {
    signin() {
      if(!this.userStore.signIn(this.username,this.password)){
        this.warningMessage = "Los detalles de ingreso son incorrectos.";
        this.dialogVisible = true;
        this.clearFields();
      }
      const redirect = this.$router.currentRoute.value.query.redirect || '/inicio';
      this.$router.push(redirect);
    },
    register(){
      if(this.userStore.register(this.name, this.email, this.username, this.password, this.passwordrepeat)) {
      const redirect = this.$router.currentRoute.value.query.redirect || '/inicio';
      this.$router.push(redirect);
      }
      else{
        this.warningMessage = "Los detalles de registro son incorrectos.";
        this.dialogVisible = true;
        this.clearFields();
      }
    },
    returnLanding() {
      this.$router.push('/');
    },
    forgotPassword() {
      this.$router.push("/olvide-mi-contraseña");
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    clearFields() {
      this.username = '';
      this.name = '';
      this.password = '';
      this.email = '';
      this.passwordrepeat = '';
    },
    
  }
};
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: auto;
}

.button-toggle-container {
  margin-bottom: 20px;
  border-radius: 30px;
}

.v-btn-toggle {
  border-radius: 30px;
  background-color: rgb(var(--v-theme-surface));
}

.pill-button {
  height: 100%;
}

.logo {
  max-width: 100%;
  height: 50px;
  margin-bottom: 16px;
}

.header {
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.welcome-header {
  margin-top: 1px;
}

.forgot-password-link {
  text-align: center;
  margin-top: 11px;
}

.forgot-password-link a {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}
</style>