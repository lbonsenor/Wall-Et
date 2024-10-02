<template>
    <v-navigation-drawer permanent color="surface" expand-on-hover rail style="height: 92vh; margin-top: 4vh;" class="rounded-e-xl py-6 px-2">
      <v-list base-color="primary">
        <v-list-item rounded="xl" nav slim prepend-icon="mdi-home-outline" title="Inicio" value="home"/>
        <v-list-item rounded="xl" nav slim prepend-icon="mdi-send-outline" title="Transferir Dinero" value="transfer"/>
        <v-list-item rounded="xl" nav slim prepend-icon="mdi-receipt-text-clock-outline" title="Actividades" value="activities"/>
        <v-list-item rounded="xl" nav slim prepend-icon="mdi-credit-card-outline" title="Mis Tarjetas" value="cards"/>
        <v-list-item rounded="xl" nav slim prepend-icon="mdi-piggy-bank-outline" title="Cobrar" value="charge"/>
      </v-list>

      <template v-slot:append>
        <v-list>
          <v-list-item nav rounded="xl" prepend-icon="mdi-cog-outline" title="Configuración" value="settings" base-color="primary"/>
          <v-list-item nav rounded="xl" prepend-icon="mdi-logout" title="Cerrar Sesión" value="logout" base-color="error" />
        </v-list>
      </template>
    </v-navigation-drawer>
</template>
  
<script setup>

  
</script>

<style>


</style>
