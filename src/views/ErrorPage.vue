<template>
    <div class="container">
      <div class="header" @click="returnLanding">
      <img class="logo" src="./../assets/wallet-white.png" alt="Wall-ET logo" />
      <h2> Wall · Et</h2>
    </div>
        
    <h1 class="welcome-header">¡Oops!</h1>
    <h1 class="welcome-header">Esta página no existe :c</h1>
</div>
</template>

<script>
export default {
  methods: {
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