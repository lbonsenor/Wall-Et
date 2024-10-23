<template>
  <div class="container">
    <div class="header" @click="returnLanding">
    <img class="logo" src="./../assets/wallet-white.png" alt="Wall-ET logo" />
    <h2> Wall · Et</h2>
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
        <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50 style="min-width: fit-content;" text="Ingresar" variant="outlined" rounded="xl"@click="signin"></v-btn>
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
          <v-btn value="register-button d-flex mx-auto" color="primary" width="40%" height=50 style="min-width: fit-content;" text="Registrarme" variant="outlined" rounded="xl"@click="signin"></v-btn>
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
      returnLanding(){
        this.$router.push('/');
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
};
</style>