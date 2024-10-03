<template>
  <TopBar/>
  <v-app class="pa-5">
    <SideBar/>
    <v-main>
      <RouterView/>
    </v-main>
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';

export default { 
  components: {
    TopBar, 
    SideBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

h1 {
  font-weight: normal;
  padding: 1%;
}

body {
  font-family: "Inter", sans-serif;
  background-color: rgb(var(--v-theme-background));
}
</style>
