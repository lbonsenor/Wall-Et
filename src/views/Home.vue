<template>
  <h1>Inicio</h1>
  <div class="d-flex ga-5 align-center mb-5">
    <BalanceBox />
    <CVU/>
  </div>
  <div class="d-flex">
    <activity-list :activities="activities" :display-count="4" />
    <MiniCard :company="Mastercard" :last_digits="1230"></MiniCard>
  </div>
    
</template>

<script>
import BalanceBox from '@/components/BalanceBox.vue';
import CVU from '@/components/CVU.vue';
import ActivityList from '@/components/ActivityList.vue';
import MiniCard from '@/components/MiniCard.vue';

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