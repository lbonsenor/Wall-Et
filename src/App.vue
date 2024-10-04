<template>
  <TopBar/>
  <v-app class="bg-transparent">
    <SideBar />
    <v-main class="mx-5">
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
  font-weight: 600;
  padding: 1%;
}

body {
  font-family: "Inter", sans-serif;
  color: white;
  background: linear-gradient(339deg,rgb(var(--v-theme-grad1)),rgb(var(--v-theme-grad2)),rgb(var(--v-theme-grad3)),rgb(var(--v-theme-grad4)));
  background-size: 240% 240%;
  animation: gradient-animation 16s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


</style>
