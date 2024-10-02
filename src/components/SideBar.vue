<template>
  <v-navigation-drawer permanent color="surface" expand-on-hover rail style="height: 92vh; margin-top: 4vh;" class="rounded-e-xl py-6 px-2">
    <v-list mandatory class="justify-center flex-column fill-height d-flex" activated="0">
      <v-list-item 
        v-for="(item, i) in items" 
        nav rounded="pill"
        :key="i"
        :value="item.value"
        :title="item.title"
        :prepend-icon="item.icon"
        color="on-surface"
        base-color="on-surface"
        variant="text"
        active-class="active"
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default{
    // setup() {
    //   const router = useRouter()

    //   const navigateTo = (route) => {
    //     router.push(route)
    //   }

    //   return {
    //     navigateTo
    //   }
    // },
    data: () => ({
      items: [
        {title: 'Inicio', value:"home", icon:"mdi-home-outline", route: '/'},
        {title: 'Transferir Dinero', value:"transfer", icon:"mdi-invoice-send-outline", route: '/transferir'},
        {title: 'Actividades', value:"activities", icon:"mdi-receipt-text-clock-outline", route: '/actividades'},
        {title: 'Mis Tarjetas', value:"cards", icon:"mdi-credit-card-outline", route:'/mis-tarjetas'},
        {title: 'Cobrar', value:"charge", icon:"mdi-piggy-bank-outline", route: '/cobrar'},
      ],
    })
  }
  
</script>

<style >
  .active{
    background-color: rgb(var(--v-theme-on-surface))!important;
    color: rgb(var(--v-theme-surface))!important;
  }
</style>
