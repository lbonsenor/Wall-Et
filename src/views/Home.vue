<template>
  <h1>Inicio</h1>
  <div class="d-flex ga-5 align-center mb-5">
    <BalanceBox :balance="balance"/>
    <CVU :alias="alias" :cvu="cvu"/>
  </div>
  <div class="d-flex">
    <ActivityList :activities="transactionStore.transactions" :displayCount="5" :isHomePage="true" />    
    <CardList class="ml-5" :cards="cardStore.cards" :display-count="5"/>
  </div>
</template>

<script>
import BalanceBox from '@/components/BalanceBox.vue';
import CVU from '@/components/CVU.vue';
import ActivityList from '@/components/activities/ActivityList.vue';
import CardList from '@/components/cards/MiniCardsList.vue';

import { useCardStore } from '@/stores/CardStore';
import { useTransactionStore } from '@/stores/TransactionStore';

export default {
  name: 'Home',
  components: {
    CVU,
    ActivityList,
    BalanceBox,
    CardList
  },
  
  setup() {
    const cardStore = useCardStore();
    const transactionStore = useTransactionStore();
    transactionStore.fetchTransactions();
    return {
      cardStore,
      transactionStore
    }
  },

  data() {
    return {
      alias: "lau.bonsenor",
      cvu: "00000000123145687945123",
      balance: 123.12
    }
  }
}
</script>