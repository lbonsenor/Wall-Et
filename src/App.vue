<template>
  <v-app class="pa-4">
    <SideBar />
    <TopBar />
    <v-main>
      <h1>Inicio</h1>
      <div class="d-flex ga-4 align-center">
        <BalanceBox />
        <CVU></CVU>
      </div>
      <activity-list :activities="activities" :display-count="5" />
      <HelloWorld />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>
<script>
import CVU from './components/CVU.vue';
import ActivityList from './components/ActivityList.vue';
import BalanceBox from './components/BalanceBox.vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { 
    CVU,
    ActivityList,
    BalanceBox,
    SideBar,
    TopBar,
    HelloWorld
  },
  data() {
    return {
      activities: [
        {
          date: '2024-03-01',
          title: 'Pedidos Ya',
          transaction_type: 'Pago online',
          payment_type: 'Dinero disponible',
          amount: '$17.500,00',
          time: '17:15',
          out: true
        },
        {
          date: '2024-03-01',
          title: 'Camila Lee',
          transaction_type: 'Transferencia recibida',
          payment_type: 'Dinero disponible',
          amount: '$20.500,00',
          time: '09:00',
          out: false
        },
        {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },
        {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },{
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },{
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },{
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },{
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },
      ]
    }
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
