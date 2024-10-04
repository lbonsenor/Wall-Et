<template>
  <h1>Inicio</h1>
  <div class="d-flex ga-5 align-center mb-5">
    <BalanceBox />
    <CVU/>
  </div>
  <div class="d-flex">
    <activity-list :activities="activities" :display-count="4" />
    <CardList class="ml-10" :cards="cards" :display-count="5"/>
  </div>
    
</template>

<script>
import BalanceBox from '@/components/BalanceBox.vue';
import CVU from '@/components/CVU.vue';
import ActivityList from '@/components/ActivityList.vue';
import CardList from '@/components/CardList.vue';

export default {
  name: 'Home',
  mounted() {
    console.log('Home component has been mounted.');
  },
  components: {
    CVU,
    ActivityList,
    BalanceBox,
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
      ]
    }
  }
}
</script>