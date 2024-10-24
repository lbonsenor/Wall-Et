<template>
  <h1>Actividades</h1>
  <div class="activity">
    <ActivityList class="activity-list" :activities="transactionStore.filteredTransactions" :display-count="Infinity"/>
    <ActivityFilter class="activity-filter"/>
  </div>
</template>

<script>
import ActivityList from '@/components/activities/ActivityList.vue';
import ActivityFilter from '@/components/activities/ActivityFilter.vue';
import { useTransactionStore } from '@/stores/TransactionStore';

export default {
  name: 'Activities',
  components: {
    ActivityList,
    ActivityFilter
  },
  setup() {
    const transactionStore = useTransactionStore();
    
    transactionStore.fetchTransactions();

    return { transactionStore }
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