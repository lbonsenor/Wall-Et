<template>
    <div class="container">
      <div class="header">
      <img class="logo" src="./../assets/logo.png" alt="Wall-ET logo" />
      <h2>WALL · Et</h2>
      </div>
      
        <h1 class="welcome-header">Bienvenidx!</h1>
      <div class="button-toggle-container">
        <v-btn-toggle 
          v-model="selected" 
          mandatory 
          rounded="xl"
        >
          <v-btn 
            class="pill-button" 
            :class="{ 'active-button': selected === 'sesion' }" 
            variant="outlined" 
            value="sesion"
          >
            Iniciar sesión
          </v-btn>
          <v-btn 
            class="pill-button" 
            :class="{ 'active-button': selected === 'registro' }" 
            variant="outlined" 
            value="registro"
          >
            Registrarme
          </v-btn>
        </v-btn-toggle>
      </div>
  
      <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl" v-if="selected === 'sesion'">
        <v-text-field 
          class="mb-2"
          variant="outlined" 
          rounded="lg" 
          placeholder="Nombre de usuario o email" 
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
        <div class="d-flex justify-center mt-4">
        <v-btn value="signin-button" @click="signin">Ingresar</v-btn>
      </div>
      </v-card>
      <v-card class = "mx-auto px-6 py-8" max-width="350" rounded="xl" v-if="selected === 'registro'">
        <v-text-field 
          class="mb-2"
          variant="outlined" 
          rounded="lg" 
          placeholder="Email" 
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
        <div class="d-flex justify-center mt-4">
        <v-btn value="register-button" @click="signin">Registrarse</v-btn>
      </div>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: 'sesion', // Set default selected button
      };
    },
    methods: {
      signin() {
        this.signIn(); 
        this.$router.push('/inicio');
      }
      
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
  }
  
  .button-toggle-container {
    margin-bottom: 20px; 
    border-radius : 30px;
  }
  
  .v-btn-toggle {
    border-radius: 30px;
    background-color: white /* todo CHANGE THIS COLORS (no sabia como poner los de la paleta) */
  }
  
  .pill-button {
    height: 100%;
  }
  .register-button{
    background-color: var(--v-theme-button);
  }
  .logo {
    filter: invert(1) brightness(100) saturate(100%);
  max-width: 100%; /* Ensures the image is responsive */
  height: 50px;    /* Maintains aspect ratio */
  margin-bottom: 16px; /* Adds space below the image */
}
.header {
  margin-bottom: 1px;
  display: flex;
  align-items: center; /* Vertically center the logo and text */
  margin-bottom: 16px; /* Space below the header */
}
.welcome-header {
  margin-top: 1px; /* Adjust space above the heading */};

  </style>