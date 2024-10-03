<template>
  <v-app class="pa-4">
    <SideBar/>
    <TopBar/>
    <v-main>
      <h1>Inicio</h1>
      <div class="d-flex ga-4 align-center">
        <BalanceBox/>
        <CVU></CVU>
      </div>
      <HelloWorld />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
import CVU from './components/CVU.vue';



  //
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

h1{
  font-weight: normal;
  padding: 1%;
}

body{
  font-family: "Inter", sans-serif;
  background-color: rgb(var(--v-theme-background));
}
</style>
