<template>
  <h1>Inicio</h1>
  <v-col style="width: fit-content; margin: auto">
    <v-row class="align-center ga-7 mb-7">
      <BalanceBox :balance="balance"/>
      <CVU :alias="alias" :cvu="cvu"/>
    </v-row>
    <v-row class="ga-7">
      <ActivityList :activities="activities" :displayCount="5" :isHomePage="true" />    
      <CardList :cards="cards" :display-count="5"/>
    </v-row>
  </v-col>
  
</template>

<script>
import BalanceBox from '@/components/BalanceBox.vue';
import CVU from '@/components/CVU.vue';
import ActivityList from '@/components/activities/ActivityList.vue';
import CardList from '@/components/cards/CardList.vue';

export default {
  name: 'Home',
  mounted() {
    console.log('Home component has been mounted.');
  },
  components: {
    CVU,
    ActivityList,
    BalanceBox,
    CardList
  },
  data() {
    return {
      cards: [
        {
          company: 'Mastercard',
          type: 'Crédito',
          last_digits: '1234'
        },
        {
          company: 'Mastercard',
          type: 'Crédito',
          last_digits: '1234'
        },
        {
          company: 'Mastercard',
          type: 'Crédito',
          last_digits: '1234'
        },
        
      ],
      activities: [
        {
          date: '2024-09-10',
          title: 'Pedidos Ya Hola Hola Hoal HOla ',
          transaction_type: 'Pago online',
          payment_type: 'Dinero disponible',
          amount: '$17.500.000,00',
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
        }, {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        }, {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        }, {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        }, {
          date: '2024-02-28',
          title: 'Farmacity',
          transaction_type: 'Pago online',
          payment_type: 'Mastercard prepago',
          amount: '$25.176,70',
          time: '11:45',
          out: true
        },
        
      ],
      alias: "lau.bonsenor",
      cvu: "00000000123145687945123",
      balance: 123.12
    }
  }
}
</script>