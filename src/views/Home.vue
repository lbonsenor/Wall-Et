<template>
  <h1>Inicio</h1>
  <div class="d-flex ga-5 align-center mb-5">
    <BalanceBox :balance="balanceStore.balance" />
    <CVU :alias="userStore.user.alias" :cvu="userStore.user.cvu" />
  </div>
  <div class="d-flex">
    <ActivityList :activities="transactionStore.transactions" :displayCount="5" :isHomePage="true" />
    <CardList class="ml-5" :cards="cardStore.cards" :display-count="5" />
  </div>
</template>

<script>
import BalanceBox from '@/components/BalanceBox.vue';
import CVU from '@/components/CVU.vue';
import ActivityList from '@/components/activities/ActivityList.vue';
import CardList from '@/components/cards/MiniCardsList.vue';

import { useCardStore } from '@/stores/CardStore';
import { useTransactionStore } from '@/stores/TransactionStore';
import { useUserStore } from '@/stores/UserStore';
import { useBalanceStore } from '@/stores/BalanceStore';

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
    const userStore = useUserStore();
    const balanceStore = useBalanceStore();

    transactionStore.fetchTransactions();
    balanceStore.fetchBalance();

    return {
      cardStore,
      transactionStore,
      userStore,
      balanceStore
    }
  }
}
</script>