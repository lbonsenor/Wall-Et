<template>
    <div class="container">
      <div class="header">
      <img class="logo" src="./../assets/wallet-white.png" alt="Wall-ET logo" />
      <h2> WALL · Et</h2>
      </div>
      
        <h1 class="reset-header">Restablezca su contraseña</h1>
  
      <v-card class="mx-auto px-6 py-8" max-width="350" rounded="xl">
        <v-text-field 
          class="mb-2"
          variant="outlined" 
          rounded="lg" 
          placeholder="Introduzca su nueva contraseña" 
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
          placeholder="Repita su nueva contraseña" 
          persistent-placeholder 
          hide-details 
          hide-spin-buttons 
          color="secondary" 
          width="300px"
        ></v-text-field>
        <div class="d-flex justify-center mt-4">
        <v-btn value="reset-button" @click="signin">Restablecer</v-btn>
      </div>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: 'sesion', // Set default selected button -> later change to an input from parent component
      };
    },
    methods: {
      signin() {
        this.signIn(); 
        this.$router.push('/inicio');
      },
      
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
  

  .reset-button{
    background-color: var(--v-theme-button);
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
.reset-header {
  margin-top: 1px; /* Adjust space above the heading */};


  </style>