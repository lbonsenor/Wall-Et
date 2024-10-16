<template>
    <div class="container">
      <button @click="signin">
        <h1>Bienvenidx!</h1>
      </button>
      <div class="button-toggle-container">
        <v-btn-toggle 
          v-model="selected" 
          mandatory 
          rounded="xl"
        >
          <v-btn 
            class="pill-button" 
            :class="{ 'active-button': selected === 'button1' }" 
            variant="outlined" 
            value="button1"
          >
            Iniciar sesión
          </v-btn>
          <v-btn 
            class="pill-button" 
            :class="{ 'active-button': selected === 'button2' }" 
            variant="outlined" 
            value="button2"
          >
            Registrarme
          </v-btn>
        </v-btn-toggle>
      </div>
  
      <v-card class="mx-auto px-6 py-8" max-width="350">
        <v-text-field 
          variant="outlined" 
          rounded="lg" 
          placeholder="User name or mail" 
          persistent-placeholder 
          hide-details 
          hide-spin-buttons 
          color="secondary" 
          width="300px"
        ></v-text-field>
        <v-text-field 
          variant="outlined" 
          rounded="lg" 
          placeholder="Password" 
          persistent-placeholder 
          hide-details 
          hide-spin-buttons 
          color="secondary" 
          width="300px"
        ></v-text-field>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: 'button1', // Set default selected button
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
  
  .active-button {
    /* background-color: var(--v-secondary) !important;  */
  }
  </style>