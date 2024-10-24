<template>
    <h1>Actividades</h1>
    <div class="activity">
        <ActivityList class="activity-list" :activities="activities" :display-count="Infinity"/>
        <ActivityFilter class="activity-filter"/>
    </div>
</template>

<script>
import ActivityList from '@/components/activities/ActivityList.vue';
import ActivityFilter from '@/components/activities/ActivityFilter.vue';

export default {
    name: 'Activities',
    components: {
      ActivityList,
      ActivityFilter
    },
    data() {
      return {
        activities: [
          {
            date: '2024-09-10',
            user: 'Pedidos Ya Hola Hola Hoal HOla ',
            transaction_type: 'Pago online',
            payment_type: 'Dinero disponible',
            amount: '$17.500.000,00',
            time: '17:15',
            out: true
          },
          {
            date: '2024-03-01',
            user: 'Camila Lee',
            transaction_type: 'Transferencia recibida',
            payment_type: 'Dinero disponible',
            amount: '$20.500,00',
            time: '09:00',
            out: false
          },
          {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          },
          {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          }, {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          }, {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          }, {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          }, {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
          },
          
        ],
        
      }
    }
  }
  </script>

  <style scoped>
  .activity {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
  }

  .activity-list {
    width: 70%;
    margin-right: 20px;
  }
  .activity-filter { 
    width: 30%;
  }
  </style>