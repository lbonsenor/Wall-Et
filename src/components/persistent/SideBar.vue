<template>
  <v-navigation-drawer permanent color="surface" expand-on-hover rail style="height: 92vh; margin-top: 4vh;"
    class="rounded-e-xl">
    <template v-slot:prepend>
        <v-list-item variant="outline" class="align-center mt-2"
          prepend-avatar="@/assets/logo.svg">
            <h2 class="logo text-center">Wall·Et</h2>
        </v-list-item>
    </template>

    <v-list mandatory class="justify-center fill-height flex-column d-flex ga-4 px-2">
      <v-list-item v-for="(item, i) in items" 
        nav rounded="pill" 
        :key="i" 
        :itemid="i" 
        :value="item.value" 
        :title="item.title"
        :prepend-icon="item.icon"
        :active="isCurrentRoute(item.route)"
        active-class="active" 
        class="hi"
        @click="navigateTo(item.route)">
      </v-list-item>

      <v-list-item
        nav rounded="pill" 
        prepend-icon="mdi-logout"
        title="Cerrar sesión"
        @click="signOut"
        class="sign-out-btn"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
export default {
  data: () => {
    return {
      userStore : useUserStore(),
      items: [
        { title: 'Inicio', value: "home", icon: "mdi-home-outline", route: '/inicio' },
        { title: 'Transferir Dinero', value: "transfer", icon: "mdi-send-outline", route: '/transferir' },
        { title: 'Actividades', value: "activities", icon: "mdi-receipt-text-clock-outline", route: '/actividades' },
        { title: 'Tarjetas', value: "cards", icon: "mdi-credit-card-outline", route: '/tarjetas' },
        { title: 'Cobrar', value: "charge", icon: "mdi-cash-multiple", route: '/cobrar' },
      ],
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    isCurrentRoute(route){
      return this.$route.path == route
    },
    signOut() {
      console.log("Cerrando sesión");
      this.userStore.signOut();
      this.$router.push('/'); //todo -> either go to landing or to login (landing seems better)
    }
  }
}

</script>

<style>
  .active {
    background-color: rgb(var(--v-theme-button)) !important;
    color: rgb(var(--v-theme-on-button)) !important;
  }
  .fixed {
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 12px;
  }
  .logo{
    font-family: "Fira Mono";
  }
  .v-list-item__overlay {
    color: rgb(var(--v-theme-button));
  }
  .sign-out-btn {
    color: red !important;
  }
</style>
