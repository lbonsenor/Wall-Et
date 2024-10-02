<template>
  <v-navigation-drawer permanent color="surface" expand-on-hover rail style="height: 92vh; margin-top: 4vh;" class="rounded-e-xl py-6 px-2">
    <v-list base-color="primary">
      <v-list-item 
        v-for="(item, i) in items" 
        nav rounded="xl"
        :key="i"
        :value="item.value"
        :title="item.title"
        :prepend-icon="item.icon"
        variant="plain"
        >

      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list>
        <v-list-item nav rounded="xl" prepend-icon="mdi-cog-outline" title="Configuración" value="settings" base-color="primary"/>
        <v-list-item nav rounded="xl" prepend-icon="mdi-logout" title="Cerrar Sesión" value="logout" base-color="error" />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
  
<script>
  export default{
    data: () => ({
      items: [
        {title: 'Inicio', value:"home", icon:"mdi-home-outline"},
        {title: 'Transferir Dinero', value:"transfer", icon:"mdi-send-outline"},
        {title: 'Actividades', value:"activities", icon:"mdi-receipt-text-clock-outline"},
        {title: 'Mis Tarjetas', value:"cards", icon:"mdi-credit-card-outline"},
        {title: 'Cobrar', value:"charge", icon:"mdi-piggy-bank-outline"},
      ]
    })
  }
  
</script>

<style>


</style>
