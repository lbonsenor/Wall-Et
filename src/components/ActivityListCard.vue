<template>
    <v-card class="pa-3 px-4" min-width="350" max-width="500" color="surface" flat>
        <v-row align="center" style="color:rgb(var(--v-theme-title))" no-gutters>
            <v-col cols="2" class="me-auto">
                <v-avatar size="65">
                    <v-img src="@/assets/pedidos_ya.png"></v-img>
                </v-avatar>
            </v-col>
            <v-col cols="6" class="me-auto text-no-wrap scrollable">
                <div class="mx-2">
                    <v-card-text class="font-weight-bold pa-0">{{ title }}</v-card-text>
                    <v-card-text class="text-caption pa-0 mt-0.5 text-sm-caption" style="color:rgb(var(--v-theme-text_caption))">{{ transaction_type }}</v-card-text>
                    <v-card-text class="d-flex align-center text-caption pa-0 mt-0.5" style="color:rgb(var(--v-theme-text_caption))">
                        <v-icon size="x-small" class="mr-1" color="button">mdi-circle</v-icon>
                        {{ payment_type }}
                    </v-card-text>
                </div>
            </v-col>
            <v-col cols="4" class="text-right ma-auto text-no-wrap">
                <v-card-text class="font-weight-bold pa-0" :class="{ 'text-success': !out }">
                    {{ out ? '-' + amount : '+' + amount }}
                </v-card-text>
                <v-card-text class="text-caption pa-0 mt-0.5" style="color:rgb(var(--v-theme-text_caption))">{{ time }}</v-card-text>
            </v-col>

        </v-row>
    </v-card>
</template>

<!-- <script>
export default {
    data: () => ({
        icon: 'mdi-circle',
        title: 'Pedidos Ya',
        transaction_type: 'Pago online',
        payment_type: 'Dinero disponible',
        amount: '$17.500',
        time: '17:15',
        out: true,
    })
}
</script> -->
  
  <script>
  export default {
    name: 'ActivityListCard',
    props: {
      title: {
        type: String,
        required: true
      },
      transaction_type: {
        type: String,
        required: true
      },
      payment_type: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      out: {
        type: Boolean,
        required: true
      }
    },
  }
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 8px;
  }
  .scrollable {
    overflow: scroll;
    overflow-y: hidden;
  }
  .scrollable::-webkit-scrollbar{
        width: 0px;
        background: transparent;
    }

  /* .balance{
        font-size: x-large; 
        font-weight: 600;
        font-family: "Roboto Mono", monospace;
    } */
    
  </style>