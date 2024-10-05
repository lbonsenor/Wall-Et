<template>
  <TopBar/>
  <v-app class="px-15">
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');

h1 {
  font-weight: normal;
  padding: 1%;
}

body {
  font-family: "Inter", sans-serif;
  background-color: rgb(var(--v-theme-background));
}

.gradient-card {
    transition: all 0.3s ease;
}

.gradient-card:hover {
    transform: scale(1.02);
}

/* Scheme 1: Deep Purple to Indigo */
.card-gradient-1 {
  background: linear-gradient(135deg, #4A0E4E 0%, #3F51B5 100%);
}
.card-gradient-1:hover {
  background: linear-gradient(30deg, #5C1160 0%, #5C6BC0 100%);
}

/* Scheme 2: Midnight Blue to Electric Blue */
.card-gradient-2 {
  background: linear-gradient(135deg, #1A237E 0%, #0288D1 100%);
}
.card-gradient-2:hover {
  background: linear-gradient(80deg, #2C3590 0%, #039BE5 100%);
}

/* Scheme 3: Dark Teal to Aqua */
.card-gradient-3 {
  background: linear-gradient(135deg, #00695C 0%, #00BCD4 100%);
}
.card-gradient-3:hover {
  background: linear-gradient(80deg, #00796B 0%, #26C6DA 100%);
}

/* Scheme 4: Deep Magenta to Violet */
.card-gradient-4 {
  background: linear-gradient(135deg, #880E4F 0%, #9C27B0 100%);
}
.card-gradient-4:hover {
  background: linear-gradient(80deg, #9A1663 0%, #AB47BC 100%);
}

/* Scheme 5: Navy to Cerulean */
.card-gradient-5 {
  background: linear-gradient(135deg, #0D47A1 0%, #03A9F4 100%);
}
.card-gradient-5:hover {
  background: linear-gradient(80deg, #1565C0 0%, #29B6F6 100%);
}
</style>
